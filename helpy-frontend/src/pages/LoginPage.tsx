import React, { useState } from 'react';
import { useAuthStore } from '../store/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password, navigate);
    navigate('/');
  };

  return (
    <div className="flex justify-end items-center w-screen h-screen bg-[url(/images/background.png)] bg-cover">
      <div className="card w-100 h-100 bg-base-100 shadow-xl mr-20 py-20 px-10 bg-opacity-85">
        <h2 className="text-3xl font-bold text-left text-primary mb-8">Se connecter</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='w-full'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full rounded-xl bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name='email'
            />
          </div>
          <div>
            <label htmlFor="email">Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              className="input input-bordered w-full rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full rounded-xl">Se connecter</button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm">
          Pas encore de compte ?{' '}
          <Link to="/signup" className="link text-primary">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
