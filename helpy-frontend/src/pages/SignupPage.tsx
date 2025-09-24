import React from 'react';
import { useSignupStore } from '../stores/signup';
import { useAuthStore } from '../stores/auth';
import { Link, useNavigate } from 'react-router-dom';
import LoginPageVideo from '/videos/login.mp4';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const SignupPage = () => {
  const { email, password, firstName, lastName, birthDate, isAdmin, setEmail, setPassword, setFirstName, setLastName, setBirthDate, setIsAdmin } = useSignupStore();
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const avatar = ''; // Initialize avatar with a default value or fetch it dynamically
    await signup({ email, password, firstName, lastName, birthDate: new Date(birthDate), avatar, isAdmin }, navigate);
  };

  return (
    <div className='container'>

    <div className="flex justify-end items-center w-screen h-screen p-0 m-0">
      <video id="background-video" loop autoPlay>
        <source src={ LoginPageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-96 h-150 bg-card shadow-xl mr-20 py-10 px-10 bg-opacity-85 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4 text-left text-primary">S'inscrire</h2>
        <p className="text-left text-sm mb-4">Inscrivez-vous gratuitement pour accéder à nos services.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-background"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            className="w-full rounded-md bg-background"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Prénom"
            className="w-full rounded-md bg-background"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Nom"
            className="w-full rounded-md bg-background"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Input
            type="date"
            placeholder="Date de naissance"
            className="w-full rounded-md bg-background"
            value={birthDate.toISOString().split('T')[0]}
            onChange={(e) => setBirthDate(new Date(e.target.value))}
            required
          />
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="isAdmin"
              checked={isAdmin}
              onCheckedChange={(checked) => setIsAdmin(checked as boolean)}
              className="rounded-md"
            />
            <label htmlFor="isAdmin" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Administrateur
            </label>
          </div>
          <div className="flex justify-center items-center">
            <Button type="submit" className="w-60 rounded-md">S'inscrire</Button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm">
          Déjà un compte ?{' '}
          <Link to="/login" className="link text-primary">Se connecter</Link>
        </p>
      </div>
    </div>
    </div>

  );
};

export default SignupPage;
