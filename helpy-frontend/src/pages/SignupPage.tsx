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
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success w-full">S'inscrire</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Déjà un compte ?{' '}
          <Link to="/login" className="link text-success">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
