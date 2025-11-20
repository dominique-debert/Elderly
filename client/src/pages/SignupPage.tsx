import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useAuthStore, useSignupStore } from "@/stores";
import { getGeolocationDataWithFallback } from "@/utils";
import toast from "react-hot-toast";
import Icon from "@mdi/react";
import { mdiCloudUploadOutline } from "@mdi/js";

// Step 1: Account Creation
function Step1({ onNext }: { onNext: () => void }) {
  const { email, password, setEmail, setPassword } = useSignupStore();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    onNext();
  };

  return (
    <>
      <div className="h-vh flex flex-col items-center justify-start bg-white dark:bg-transparent z-10">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/landing-illustration.jpg"
            alt="Personnes âgées et jeunes cuisinant ensemble"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <h1 className="text-3xl font-light text-slate-300 mt-10 mb-8 text-center z-10">
          Créez votre compte
        </h1>

        {/* Progress Steps */}
        <div className="flex items-start justify-center mb-12 w-full lg:max-w-lg  p-6 z-10">
          <div className="flex flex-col items-center">
            <div className="font-medium w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm">
              <span className="-mt-px">1</span>
            </div>
            <span className="ml-2 text-sm text-primary font-bold mt-4">
              Compte
            </span>
          </div>
          <div className="w-16 h-px bg-slate-300 mx-4 mt-4.5"></div>
          <div className="flex flex-col items-center">
            <div className="font-medium w-10 h-10 border border-slate-300 text-slate-300 rounded-full flex items-center justify-center text-sm">
              <span className="-mt-px">2</span>
            </div>
            <span className="ml-2 text-sm text-slate-300 mt-4">
              Informations <br /> personnelles
            </span>
          </div>
          <div className="w-16 h-px bg-slate-300 mx-4 mt-4.5"></div>

          <div className="flex flex-col items-center">
            <div className="font-medium w-10 h-10 border border-slate-300 text-slate-300 rounded-full flex items-center justify-center text-sm">
              <span className="-mt-px">3</span>
            </div>
            <span className="ml-2 text-sm text-slate-300 mt-4">
              Confirmation
            </span>
          </div>
        </div>

        <main className="flex flex-col lg:flex-row items-center justify-between p-6 pt-0 w-full z-10 md:max-w-lg h-full lg:gap-24">
          <div className="text-left flex flex-col h-full w-full">
            <form onSubmit={handleNext} className="space-y-4 flex flex-col">
              <input
                type="email"
                placeholder="Votre email"
                className="input input-primary focus:outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Choisissez un mot de passe (8 caractères minimum)"
                className="input input-primary focus:outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirmez le mot de passe"
                className="input input-primary focus:outline-none w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full btn btn-primary transition-colors mt-6"
              >
                Suivant
              </button>
            </form>

            <p className="text-center text-sm text-slate-100 mt-8">
              <Link to="/login" className="hover:text-blue-300">
                Déjà un compte ? Connectez-vous
              </Link>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

// Step 2: Personal Information
function Step2({ onNext }: { onNext: () => void; onBack: () => void }) {
  const {
    firstName,
    lastName,
    birthDate,
    phone,
    setFirstName,
    setLastName,
    setBirthDate,
    setPhone,
    setAvatarFilename,
    setAvatarFile,
  } = useSignupStore();
  const [, setSelectedFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    onNext();
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="h-vh flex flex-col items-center justify-start bg-white dark:bg-transparent z-10">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/landing-illustration.jpg"
          alt="Personnes âgées et jeunes cuisinant ensemble"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <h1 className="text-3xl font-light text-slate-300 mt-10 mb-8 text-center z-10">
        Créez votre compte
      </h1>

      {/* Progress Steps */}
      <div className="flex items-start justify-center w-full p-6 z-10">
        <div className="flex flex-col items-center">
          <div className="font-medium w-10 h-10 border border-slate-300 text-slate-300 rounded-full flex items-center justify-center text-sm">
            <span className="-mt-px">1</span>
          </div>
          <span className="ml-2 text-sm text-slate-300 mt-4">Compte</span>
        </div>
        <div className="w-16 h-px bg-slate-300 mx-4 mt-4.5"></div>
        <div className="flex flex-col items-center">
          <div className="font-medium w-10 h-10 text-slate-300 rounded-full flex items-center justify-center text-sm">
            <div className="font-medium w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm">
              <span className="-mt-px">2</span>
            </div>
          </div>
          <span className="ml-2 text-sm text-slate-300 mt-4">
            Informations <br /> personnelles
          </span>
        </div>
        <div className="w-16 h-px bg-slate-300 mx-4 mt-4.5"></div>

        <div className="flex flex-col items-center">
          <div className="font-medium w-10 h-10 border border-slate-300 text-slate-300 rounded-full flex items-center justify-center text-sm">
            <span className="-mt-px">3</span>
          </div>
          <span className="ml-2 text-sm text-slate-300 mt-4">Confirmation</span>
        </div>
      </div>

      <main className="flex flex-col lg:flex-row justify-between p-6 pt-0 w-full z-10 md:w-lg h-full lg:gap-24">
        <form onSubmit={handleNext} className="space-y-4 md:w-full">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Votre prénom
            </label>
            <input
              placeholder="Jean"
              type="text"
              className="input input-primary w-full focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Votre nom
            </label>
            <input
              type="text"
              placeholder="Durand"
              className="input input-primary w-full focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Votre date de naissance
            </label>
            <input
              type="date"
              lang="fr"
              className="input input-primary w-full focus:outline-none"
              value={birthDate.toISOString().split("T")[0]}
              onChange={(e) => setBirthDate(new Date(e.target.value))}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Votre numéro de téléphone (facultatif)
            </label>
            <input
              pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
              type="tel"
              placeholder="06 12 34 56 78"
              className="input input-primary w-full focus:outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* Photo Upload Section */}
          <div className="w-full h-35 mt-6 lg:mt-0">
            {previewUrl ? (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Photo de profil"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewUrl(null);
                    setSelectedFile(undefined);
                    setAvatarFilename("");
                    setAvatarFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
                >
                  ×
                </button>
                <button
                  type="button"
                  onClick={handleFileClick}
                  className="absolute bottom-2 left-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1 text-xs"
                >
                  Changer
                </button>
              </div>
            ) : (
              <div
                className="border-2 border-dashed border-slate-300 rounded-lg p-4 h-34 flex flex-col items-center justify-start text-center text-slate-200 cursor-pointer hover:bg-slate-800/40 transition-colors"
                onClick={handleFileClick}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Icon path={mdiCloudUploadOutline} size={1.5} />
                </div>
                <p className="text-xs text-slate-300">
                  Déposez votre photo ici ou cliquez sur la flèche pour
                  l'envoyer depuis votre ordinateur (facultatif)
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setSelectedFile(file);
                if (file) {
                  const url = URL.createObjectURL(file);
                  setPreviewUrl(url);
                  setAvatarFilename(file.name);
                  setAvatarFile(file);
                } else {
                  setAvatarFilename("");
                  setAvatarFile(null);
                }
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary transition-colors"
          >
            Suivant
          </button>
          {/* <p className="text-center text-sm text-blue-400 mt-6">
            <Link to="/login" className="hover:text-blue-300">
              Déjà un compte ? Connectez-vous
            </Link>
          </p> */}
        </form>
      </main>
    </div>
  );
}

// Step 3: Confirmation
function Step3() {
  const signupStore = useSignupStore(); // Get the whole store
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      toast.error("Vous devez accepter les conditions générales");
      return;
    }

    setIsLoading(true);

    try {
      // Get the user's geolocation data
      const geolocationData = await getGeolocationDataWithFallback();

      // Upload avatar to backend and send avatarFilename (backend expects filename)
      const API_BASE =
        (import.meta as any).env?.VITE_API_URL ?? "http://localhost:3000";
      const uploadAvatarAndGetFilename = async (file: File) => {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch(`${API_BASE}/api/uploads`, {
          method: "POST",
          body: fd,
        });
        if (!res.ok) throw new Error("Avatar upload failed");
        const data = await res.json();
        // expect { filename, url } from backend upload route
        return {
          filename: data.filename || data.fileName || data.key || null,
          url: data.url || null,
        } as { filename: string | null; url: string | null };
      };

      let avatarFilename: string | null = signupStore.avatarFilename ?? null;
      // If we have a file, upload and persist both filename and url in the store
      if (signupStore.avatarFile) {
        try {
          const uploaded = await uploadAvatarAndGetFilename(
            signupStore.avatarFile
          );
          console.log("Uploaded avatar response:", uploaded);
          if (uploaded.filename) {
            avatarFilename = uploaded.filename;
            // persist returned filename and url into the signup store (if store exposes setters)
            if (typeof signupStore.setAvatarFilename === "function") {
              signupStore.setAvatarFilename(uploaded.filename);
            }
            if (
              uploaded.url &&
              typeof signupStore.setAvatarUrl === "function"
            ) {
              signupStore.setAvatarUrl(uploaded.url);
            }
          }
        } catch (err) {
          console.error("Avatar upload error:", err);
          // fallback: keep original client filename if upload fails
          avatarFilename = signupStore.avatarFilename ?? null;
        }
      }

      const signupData = {
        email: signupStore.email,
        password: signupStore.password,
        firstName: signupStore.firstName,
        lastName: signupStore.lastName,
        birthDate: signupStore.birthDate,
        // backend expects avatarFilename (not avatarUrl)
        avatarFilename: avatarFilename ?? null,
        isAdmin: false,
        latitude: geolocationData.latitude,
        longitude: geolocationData.longitude,
      };

      // Log the data being sent
      console.log("Signup data being sent:", signupData);

      // Validate that required fields are filled
      if (
        !signupData.email ||
        !signupData.password ||
        !signupData.firstName ||
        !signupData.lastName
      ) {
        toast.error("Veuillez remplir tous les champs obligatoires");
        return;
      }

      // Sign up the user with all data including geolocation
      await signup(signupData, navigate);

      // Show success message
      toast.success(
        "Compte créé avec succès ! Vous pouvez maintenant vous connecter."
      );

      // Navigate to login page
      navigate("/login");
    } catch (error: any) {
      console.error("Error during signup:", error);
      console.error("Error response:", error?.response?.data);

      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Une erreur s'est produite lors de la création de votre compte.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-vh flex flex-col items-center justify-start bg-white dark:bg-transparent z-10">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/landing-illustration.jpg"
          alt="Personnes âgées et jeunes cuisinant ensemble"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <h1 className="text-3xl font-light text-slate-300 mt-10 mb-8 text-center z-10">
        Créez votre compte
      </h1>

      {/* Progress Steps */}
      <div className="flex items-start justify-center w-full z-10 p-6">
        <div className="flex flex-col items-center">
          <div className="font-medium w-10 h-10 border border-slate-300 text-slate-300 rounded-full flex items-center justify-center text-sm">
            <span className="-mt-px">1</span>
          </div>
          <span className="ml-2 text-sm text-slate-300 font-medium mt-4">
            Compte
          </span>
        </div>
        <div className="w-16 h-px bg-slate-600 mx-4 mt-4.5"></div>
        <div className="flex flex-col items-center">
          <div className="font-medium w-10 h-10 border border-slate-300 text-slate-300 rounded-full flex items-center justify-center text-sm">
            <span className="-mt-px">2</span>
          </div>
          <span className="ml-2 text-sm text-slate-300 mt-4">
            Informations <br /> personnelles
          </span>
        </div>
        <div className="w-16 h-px bg-primary mx-4 mt-4.5"></div>
        <div className="flex flex-col items-center">
          <div className="font-medium w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm">
            <span className="-mt-px">3</span>
          </div>
          <span className="ml-2 text-sm text-primary mt-4">Confirmation</span>
        </div>
      </div>

      <main className="flex flex-col lg:flex-row items-center justify-between max-w-full md:max-w-lg h-full z-10 p-6 gap-32">
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div className="mb-8">
            <p className="text-sm leading-relaxed">
              Votre compte est prêt à être créé. Vous devez enfin accepter les
              conditions d'utilisation.
            </p>
          </div>
          <div className="space-y-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="input checkbox checkbox-primary text-primary bg-transparent focus:outline-none"
              />
              <span className="text-sm text-slate-200">
                En cliquant ici, je déclare avoir lu et compris les conditions
                générales.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={acceptNewsletter}
                onChange={(e) => setAcceptNewsletter(e.target.checked)}
                className="input checkbox checkbox-primary text-primary bg-transparent focus:outline-none"
              />
              <span className="text-sm text-slate-200">
                J'accepte de recevoir la newsletter d'Elderly chaque semaine.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full transition-colors mt-6"
            disabled={isLoading}
          >
            {isLoading ? "Création du compte..." : "Terminer l'inscription"}
          </button>
          {/* <p className="text-center text-sm text-blue-400 mt-6">
            <Link to="/login" className="hover:text-blue-300">
              Déjà un compte ? Connectez-vous
            </Link>
          </p> */}
        </form>
      </main>
    </div>
  );
}

export function SignupPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <Step3 />}
    </div>
  );
}
