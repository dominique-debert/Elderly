import React, { useState } from 'react';
import { useAuthStore } from '../stores/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginPageVideo from '/videos/login.mp4';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
    <div className="flex justify-end items-center w-screen h-screen bg-cover">
      <video id="background-video" loop autoPlay>
        <source src={ LoginPageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-100 h-100 bg-card shadow-xl mr-20 py-10 px-10 bg-opacity-85 rounded-lg border">
        <h2 className="text-3xl font-bold text-left text-primary mb-8">Se connecter</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-background"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name='email'
              id='email'
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">Mot de passe</label>
            <Input
              type="password"
              placeholder="Mot de passe"
              className="w-full rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id='password'
            />
          </div>
          <div>
            <Button type="submit" className="w-full rounded-xl">Se connecter</Button>
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
