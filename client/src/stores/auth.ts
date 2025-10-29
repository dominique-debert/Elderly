import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { loginUser, SignupPayload } from "@/services";
import type { IAuthResponse, IAuthState, IUseAuthReturn, IUser } from "@/types";
import { useNavigate, NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      accessToken: localStorage.getItem("accessToken"),
      isAuthenticated: Boolean(localStorage.getItem("accessToken")),
      user: null,

      login: async (
        email: string,
        password: string,
        navigate: NavigateFunction
      ): Promise<IUser> => {
        const data = await loginUser({ email, password });

        const loginData = data as IAuthResponse;
        const id = loginData.id;

        if (!id) {
          toast.error("Connexion échouée");
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
            avatarUrl: src.avatarUrl ?? "",
            birthDate: src.birthDate,
            registrationDate: src.registrationDate,
            phone: src.phone ?? "",
            isAdmin: src.isAdmin,
            longitude: src.longitude,
            latitude: src.latitude,
            profession: src.profession,
            city: src.city,
            postalCode: src.postalCode,
            address: src.address,
            description: src.description,
          } as unknown as IUser,
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
          registrationDate: src.registrationDate,
          phone: src.phone,
          avatarUrl: src.avatarUrl ?? null,
          isAdmin: src.isAdmin,
          longitude: src.longitude,
          latitude: src.latitude,
          profession: src.profession,
          city: src.city,
          postalCode: src.postalCode,
          address: src.address,
          description: src.description,
        } as unknown as IUser;
      },

      signup: async (userData, navigate) => {
        try {
          let formattedData: SignupPayload | FormData;
          if (userData instanceof FormData) {
            formattedData = userData;
          } else {
            formattedData = {
              ...userData,
              birthDate: new Date(userData.birthDate),
            };
          }

          const response = await fetch(
            "http://localhost:3000/api/auth/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formattedData),
            }
          );

          if (!response.ok) {
            const errorData = await response.json();
            console.error("Signup error response:", errorData);
            throw new Error(errorData.message || "Signup failed");
          }

          const data = await response.json();
          const signupData = data as IAuthResponse;
          const id = signupData.id;

          if (!id) {
            throw Error;
          }

          const accessToken = signupData.accessToken;
          const refreshToken = signupData.refreshToken;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("userId", id);

          const src = signupData as IAuthResponse;

          if (!src.email || !src.firstName || !src.lastName || !src.birthDate) {
            throw Error;
          }
          const user: IUser = {
            id,
            email: src.email,
            firstName: src.firstName,
            lastName: src.lastName,
            avatarUrl: src.avatarUrl ?? "",
            birthDate: src.birthDate,
            registrationDate: src.registrationDate, // Add this line
            isAdmin: src.isAdmin,
            longitude: src.longitude,
            latitude: src.latitude,
            phone: src.phone ?? "",
            profession: src.profession,
            city: src.city,
            postalCode: src.postalCode,
            address: src.address,
            description: src.description,
          };
          set({
            accessToken: data.accessToken,
            isAuthenticated: true,
            user,
          });

          toast.success("Inscription réussie");
          navigate("/login");
          return user;
        } catch (error) {
          console.error("Signup error in auth store:", error);
          // toast.error("Erreur lors de l'inscription: " + error);
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
