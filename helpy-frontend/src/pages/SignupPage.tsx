import React, { useState } from 'react';
import { useAuthStore } from '../store/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const { signup } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(email, password, navigate);
    navigate('/login');
  };

  return (
    
    <div className="flex justify-center items-right h-screen">
      <div className="card w-97 bg-base-100 shadow-xl p-8 bg-[url('/images/background.png')]">
        <h2 className="text-2xl font-bold mb-4 text-left text-primary">S'inscrire</h2>
        <p className="text-left text-sm mb-4">Inscrivez-vous gratuitement pour accéder à nos services.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-md bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="input input-bordered w-full rounded-md bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-center items-center">
            <button type="submit" className="btn btn-primary w-60 rounded-md">S'inscrire</button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm">
          Déjà un compte ?{' '}
          <Link to="/login" className="link text-primary">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
