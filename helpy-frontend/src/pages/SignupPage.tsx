import React from 'react';
import { useSignupStore } from '../stores/signup';
import { useAuthStore } from '../stores/auth';
import { Link, useNavigate } from 'react-router-dom';

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

    <div className="flex justify-end items-center w-screen h-screen bg-[url(/images/background.png)] bg-cover">
      <div className="card w-96 h-100 bg-base-100 shadow-xl mr-20 py-20 px-10 bg-opacity-85">
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
          <input
            type="text"
            placeholder="Prénom"
            className="input input-bordered w-full rounded-md bg-white"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nom"
            className="input input-bordered w-full rounded-md bg-white"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date de naissance"
            className="input input-bordered w-full rounded-md bg-white"
            value={birthDate.toISOString().split('T')[0]}
            onChange={(e) => setBirthDate(new Date(e.target.value))}
            required
          />
            <label className="label justify-normal text-start">
              <input type="checkbox" onChange={(e) => setIsAdmin(e.target.checked)} checked={isAdmin} className="checkbox checkbox-primary rounded-md mr-3" />
              Administrateur
            </label>
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
    </div>

  );
};

export default SignupPage;
