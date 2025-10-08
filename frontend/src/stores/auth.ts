import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { loginUser, signupUser, SignupPayload } from "@/services/auth.service";
import toast from "react-hot-toast";
import { useNavigate, NavigateFunction } from "react-router-dom";
import type { IAuthResponse, IAuthState, IUseAuthReturn, IUser } from "@/types";

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      accessToken: localStorage.getItem("accessToken"),
      isAuthenticated: Boolean(localStorage.getItem("accessToken")),
      user: null,

      login: async (email, password, navigate) => {
        try {
          const data = await loginUser({ email, password });
          const loginData = data as IAuthResponse;
          const id = loginData.id;

          if (!id) {
            throw new Error("User ID not found in login response");
          }

          const accessToken = loginData.accessToken;
          const refreshToken = loginData.refreshToken;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("userId", id);

          const src = loginData as IAuthResponse;

          set({
            accessToken: loginData.accessToken,
            isAuthenticated: true,
            user: {
              id,
              email: src.email,
              firstName: src.firstName,
              lastName: src.lastName,
              avatar: src.avatar,
              avatarUrl: src.avatarUrl ?? null,
              birthDate: src.birthDate,
              isAdmin: src.isAdmin,
              longitude: src.longitude,
              latitude: src.latitude,
            },
          });

          toast.success("Connexion réussie");
          navigate("/");
          return {
            id,
            email: src.email,
            firstName: src.firstName,
            lastName: src.lastName,
            avatar: src.avatar,
            birthDate: src.birthDate,
            isAdmin: src.isAdmin,
            longitude: src.longitude,
            latitude: src.latitude,
          };
        } catch (error) {
          toast.error("Erreur lors de la connexion: " + error);
          throw error;
        }
      },

      signup: async (userData, navigate) => {
        try {
          const data = await signupUser(userData);
          const signupData = data as IAuthResponse;
          const id = signupData.id;

          if (!id) {
            throw new Error("User ID not found in signup response");
          }

          const accessToken = signupData.accessToken;
          const refreshToken = signupData.refreshToken;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("userId", id);

          const src = signupData as IAuthResponse;

          if (!src.email || !src.firstName || !src.lastName || !src.birthDate) {
            throw new Error("Incomplete user data received from server");
          }
          const user: IUser = {
            id,
            email: src.email,
            firstName: src.firstName,
            lastName: src.lastName,
            avatar: src.avatar,
            avatarUrl: src.avatarUrl ?? null,
            birthDate: src.birthDate,
            isAdmin: src.isAdmin,
            longitude: src.longitude,
            latitude: src.latitude,
          };
          set({
            accessToken: data.accessToken,
            isAuthenticated: true,
            user,
          });

          toast.success("Inscription réussie");
          navigate("/profile");
          return user;
        } catch (error) {
          toast.error("Erreur lors de l'inscription: " + error);
          throw error;
        }
      },

      logout: (navigate: NavigateFunction) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");

        set({
          accessToken: null,
          isAuthenticated: false,
          user: null,
        });

        toast.success("Déconnexion réussie");
        navigate("/login");
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken, // On ne persiste que le token et l'état d'authentification
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);

export const useAuth = (): IUseAuthReturn => {
  const navigate = useNavigate();
  const { isAuthenticated, user, login, signup, logout } = useAuthStore();

  return {
    isAuthenticated: Boolean(isAuthenticated && user),
    user: user || null,
    login: (email: string, password: string) =>
      login(email, password, navigate),
    signup: (userData: SignupPayload) =>
      signup(userData as SignupPayload, navigate),

    logout: () => logout(navigate),
  };
};
