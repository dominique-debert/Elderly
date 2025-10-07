import React from "react";
import { useSignupStore } from "../stores/signup";
import { useAuthStore } from "../stores/auth";
import { Link, useNavigate } from "react-router-dom";
import { getGeolocationData } from "@/utils/geolocation";

const SignupPage = () => {
  const {
    email,
    password,
    firstName,
    lastName,
    birthDate,
    isAdmin,
    setEmail,
    setPassword,
    setFirstName,
    setLastName,
    setBirthDate,
    setIsAdmin,
  } = useSignupStore();
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    interface GeolocationData {
      latitude: string;
      longitude: string;
      accuracy?: string;
    }

    interface GeolocationError {
      message: string;
      code?: number;
    }

    const location = await getGeolocationData()
      .then((location: GeolocationData) => {
        return location;
      })
      .catch((error: GeolocationError) => {
        alert(`Geolocation error: ${error.message}`);
      });

    const avatar = ""; // Initialize avatar with a default value or fetch it dynamically

    if (!location) {
      alert("Impossible d'obtenir la géolocalisation. Veuillez réessayer.");
      return;
    }

    const payload = {
      email,
      password,
      firstName,
      lastName,
      birthDate: new Date(birthDate),
      avatar,
      isAdmin,
      latitude: location.latitude,
      longitude: location.longitude,
    };

    console.debug("Signup payload:", payload);

    try {
      await signup(payload, navigate);
    } catch (err: any) {
      // If Axios returned a validation error, show it to the developer/user
      if (err?.response?.data) {
        console.error("Signup error response:", err.response.data);
        alert(`Signup failed: ${JSON.stringify(err.response.data)}`);
      } else {
        console.error("Signup error:", err);
        alert(`Signup failed: ${err?.message ?? err}`);
      }
    }
  };

  return (
    <div className="container">
      <div className="flex justify-end items-center w-screen h-screen bg-[url(/images/background.webp)] bg-cover">
        <div className="card w-96 h-150 bg-base-100 shadow-xl mr-20 py-10 px-10 bg-opacity-85">
          <h2 className="text-2xl font-bold mb-4 text-left text-primary">
            S'inscrire
          </h2>
          <p className="text-left text-sm mb-4">
            Inscrivez-vous gratuitement pour accéder à nos services.
          </p>
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
              value={birthDate.toISOString().split("T")[0]}
              onChange={(e) => setBirthDate(new Date(e.target.value))}
              required
            />
            <label className="label justify-normal text-start">
              <input
                type="checkbox"
                onChange={(e) => setIsAdmin(e.target.checked)}
                checked={isAdmin}
                className="checkbox checkbox-primary rounded-md mr-3"
                defaultChecked={true}
              />
              Administrateur
            </label>
            <div className="flex justify-center items-center">
              <button type="submit" className="btn btn-primary w-60 rounded-md">
                S'inscrire
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm">
            Déjà un compte ?{" "}
            <Link to="/login" className="link text-primary">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
