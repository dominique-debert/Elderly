import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuthStore, useSignupStore } from "@/stores";
import { getGeolocationData } from "@/utils";

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
        // alert(`Geolocation error: ${error.message}`);
        console.error("Geolocation error:", error);
        return null;
      });

    // Generate a unique filename for the uploaded avatar (preserve extension).
    // Wrap the selected file into a new File with that generated name so
    // the multipart upload carries the desired filename.
    let avatarFileToUpload: File | undefined = undefined;
    if (selectedFile) {
      const ext = selectedFile.name.includes(".")
        ? selectedFile.name.substring(selectedFile.name.lastIndexOf("."))
        : "";
      const generatedName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 9)}${ext}`;
      avatarFileToUpload = new File([selectedFile], generatedName, {
        type: selectedFile.type,
      });
    }

    if (!location) {
      alert("Impossible d'obtenir la géolocalisation. Veuillez réessayer.");
      return;
    }

    // Build FormData for multipart upload
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("birthDate", new Date(birthDate).toISOString());
    formData.append("isAdmin", String(isAdmin));
    formData.append("latitude", location.latitude);
    formData.append("longitude", location.longitude);
    if (avatarFileToUpload) {
      formData.append("avatar", avatarFileToUpload, avatarFileToUpload.name);
      formData.append("avatarFilename", avatarFileToUpload.name);
    }

    try {
      await signup(formData, navigate);
    } catch (err: unknown) {
      const anyErr = err as { response?: { data?: unknown }; message?: string };
      if (anyErr?.response?.data) {
        console.error("Signup error response:", anyErr.response.data);
        alert(`Signup failed: ${JSON.stringify(anyErr.response.data)}`);
      } else {
        console.error("Signup error:", anyErr);
        alert(`Signup failed: ${anyErr?.message ?? String(anyErr)}`);
      }
    }
  };

  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    // Revoke object URL on cleanup to avoid memory leaks
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

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
            <div className="flex flex-col">
              <label className="label">Photo de profil</label>
              <input
                id="avatar-input"
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full"
                onChange={(e) => {
                  const file =
                    e.target.files && e.target.files[0]
                      ? e.target.files[0]
                      : undefined;
                  setSelectedFile(file);
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setPreviewUrl(url);
                  } else {
                    setPreviewUrl(null);
                  }
                }}
              />
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Avatar preview"
                  className="absolute top-[-45px] left-[156px] mt-2 w-18 h-18 object-cover border-2 border-primary rounded-xl"
                />
              )}
            </div>
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
