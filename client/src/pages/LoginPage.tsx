import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import toast from "react-hot-toast";

export function LoginPage() {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password, navigate);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      toast.error(
        "Connexion impossible.\nVérifiez votre identifiant et votre mot de passe."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/landing-illustration.jpg"
          alt="Personnes âgées et jeunes cuisinant ensemble"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 md:pr-8 flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full min-h-screen">
        {/* Login form */}
        <div className="max-w-md w-full p-8 pt-0 pb-0">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-white mb-2">Connexion</h1>
            <p className="text-slate-300">
              Entrez vos informations ci-dessous pour vous connecter.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 h-full rounded-2xl shadow-lg pt-6"
          >
            <div>
              <label
                htmlFor="login_email"
                className="block text-slate-200 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="login_email"
                placeholder="jean.durand@gmail.com"
                className="w-full input input-primary focus:outline-none border-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="login_password"
                className="block text-slate-200 text-sm font-medium mb-2"
              >
                Mot de passe
              </label>
              <input
                type="password"
                name="login_password"
                placeholder="••••••••"
                className="w-full input input-primary focus:outline-none border-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary transition-colors mt-4 lg:mt-6"
            >
              Connexion
            </button>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="checkbox checkbox-primary checkbox-xs ml-1"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-slate-200">
                Se souvenir de moi
              </label>
            </div>

            <div className="space-y-2 pt-5">
              <Link
                to="/signup"
                className="block text-slate-100 text-xs link-primary"
              >
                Pas encore de compte ? Inscrivez-vous
              </Link>
              <Link
                to="/forgot-password"
                className="block text-slate-100 text-xs link-primary"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            <p className="text-slate-300 text-xs pt-5">© 2025 Elderly</p>
          </form>
        </div>
      </div>
    </div>
  );
}
