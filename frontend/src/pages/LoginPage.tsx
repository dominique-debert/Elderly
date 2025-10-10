import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

export function LoginPage() {
  const { login, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/Profile" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password, navigate);
    navigate("/homepage");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full mt-15 gap-24">
      {/* Left side - Login form */}
      <div className="max-w-md w-[756px] h-full mt-50">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Connexion</h1>
          <p className="text-gray-400">
            Entrez vos informations ci-dessous pour vous connecter.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 h-full">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              // placeholder="jane.doe@gmail.com"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              // placeholder="••••••••"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6"
          >
            Connexion
          </button>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 bg-transparent border-gray-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
              Se souvenir de moi
            </label>
          </div>

          <div className="space-y-2">
            <Link
              to="/signup"
              className="block text-blue-400 hover:text-blue-300 text-sm"
            >
              Pas encore de compte ? Inscrivez-vous
            </Link>
            <Link
              to="/forgot-password"
              className="block text-blue-400 hover:text-blue-300 text-sm"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Neighborly</p>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="h-full mt-12 lg:ml-12">
        <img
          src="/images/landing-illustration.jpg"
          alt="Personnes âgées et jeunes cuisinant ensemble"
          className="object-cover w-[366px] h-[571px] rounded-2xl mt-12 border border-slate-600"
        />
      </div>
    </div>
  );
}
