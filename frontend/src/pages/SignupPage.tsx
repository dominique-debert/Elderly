import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useAuthStore, useSignupStore } from "@/stores";
import { getGeolocationData } from "@/utils";

// Step 1: Account Creation
function Step1({ onNext }: { onNext: () => void }) {
  const { email, password, setEmail, setPassword } = useSignupStore();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    onNext();
  };

  return (
    <div className="min-h-screen flex items-center justify-between px-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-600 mb-8">
            Créez votre compte
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="ml-2 text-sm text-blue-500 font-medium">
                Compte
              </span>
            </div>
            <div className="w-16 h-px bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">
                2
              </div>
              <span className="ml-2 text-sm text-gray-500">
                Informations personnelles
              </span>
            </div>
            <div className="w-16 h-px bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">
                3
              </div>
              <span className="ml-2 text-sm text-gray-500">Confirmation</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleNext} className="space-y-4">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Saisissez un mot de passe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg"
          >
            Suivant
          </button>
        </form>

        <p className="text-center text-sm text-blue-500 mt-6">
          <Link to="/login">Déjà un compte ? Connectez-vous</Link>
        </p>
      </div>

      <div className="hidden lg:block flex-shrink-0 ml-16">
        <div className="w-96 h-96 rounded-2xl overflow-hidden">
          <img
            src="/images/landing-illustration.jpg"
            alt="Personnes âgées et jeunes cuisinant ensemble"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

// Step 2: Personal Information
function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const {
    firstName,
    lastName,
    birthDate,
    setFirstName,
    setLastName,
    setBirthDate,
  } = useSignupStore();
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="min-h-screen flex items-center justify-between px-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-600 mb-8">
            Créez votre compte
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">
                1
              </div>
              <span className="ml-2 text-sm text-gray-500">Compte</span>
            </div>
            <div className="w-16 h-px bg-blue-500 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="ml-2 text-sm text-blue-500 font-medium">
                Informations personnelles
              </span>
            </div>
            <div className="w-16 h-px bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">
                3
              </div>
              <span className="ml-2 text-sm text-gray-500">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <form onSubmit={handleNext} className="space-y-4 flex-1">
            <input
              type="text"
              placeholder="Votre prénom"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Votre date de naissance"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={birthDate.toISOString().split("T")[0]}
              onChange={(e) => setBirthDate(new Date(e.target.value))}
              required
            />
            <input
              type="tel"
              placeholder="Votre numéro de téléphone (facultatif)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg"
            >
              Suivant
            </button>
          </form>

          {/* Photo Upload Section */}
          <div className="w-48">
            {previewUrl ? (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Photo de profil"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewUrl(null);
                    setSelectedFile(undefined);
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
                className="bg-gray-800 rounded-lg p-6 h-64 flex flex-col items-center justify-center text-center text-white cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={handleFileClick}
              >
                <div className="w-16 h-16 border-2 border-dashed border-gray-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">
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
                }
              }}
            />
          </div>
        </div>

        <p className="text-center text-sm text-blue-500 mt-6">
          <Link to="/login">Déjà un compte ? Connectez-vous</Link>
        </p>
      </div>

      <div className="hidden lg:block flex-shrink-0 ml-16">
        <div className="w-96 h-96 rounded-2xl overflow-hidden">
          <img
            src="/images/landing-illustration.jpg"
            alt="Personnes âgées et jeunes cuisinant ensemble"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

// Step 3: Confirmation
function Step3({
  onSubmit,
  onBack,
}: {
  onSubmit: () => void;
  onBack: () => void;
}) {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Vous devez accepter les conditions générales");
      return;
    }
    onSubmit();
  };

  return (
    <div className="min-h-screen flex items-center justify-between px-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-600 mb-8">
            Créez votre compte
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">
                1
              </div>
              <span className="ml-2 text-sm text-gray-500">Compte</span>
            </div>
            <div className="w-16 h-px bg-blue-500 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">
                2
              </div>
              <span className="ml-2 text-sm text-gray-500">
                Informations personnelles
              </span>
            </div>
            <div className="w-16 h-px bg-blue-500 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="ml-2 text-sm text-blue-500 font-medium">
                Confirmation
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            Votre compte est prêt à être créé. Vous devez enfin accepter les
            conditions d'utilisation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
              />
              <span className="text-sm text-gray-600">
                En cliquant ici, je déclare avoir lu et compris les conditions
                générales.
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={acceptNewsletter}
                onChange={(e) => setAcceptNewsletter(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
              />
              <span className="text-sm text-gray-600">
                J'accepte de recevoir la newsletter Neighborly chaque semaine.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg"
          >
            Terminer l'inscription
          </button>
        </form>

        <p className="text-center text-sm text-blue-500 mt-6">
          <Link to="/login">Déjà un compte ? Connectez-vous</Link>
        </p>
      </div>

      <div className="hidden lg:block flex-shrink-0 ml-16">
        <div className="w-96 h-96 rounded-2xl overflow-hidden">
          <img
            src="/images/landing-illustration.jpg"
            alt="Personnes âgées et jeunes cuisinant ensemble"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

// Main SignupPage Component
export function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { signup } = useAuthStore();
  const navigate = useNavigate();
  const signupStore = useSignupStore();

  const handleFinalSubmit = async () => {
    const location = await getGeolocationData().catch(() => null);

    if (!location) {
      alert("Impossible d'obtenir la géolocalisation. Veuillez réessayer.");
      return;
    }

    const formData = new FormData();
    formData.append("email", signupStore.email);
    formData.append("password", signupStore.password);
    formData.append("firstName", signupStore.firstName);
    formData.append("lastName", signupStore.lastName);
    formData.append("birthDate", new Date(signupStore.birthDate).toISOString());
    formData.append("isAdmin", String(signupStore.isAdmin));
    formData.append("latitude", location.latitude);
    formData.append("longitude", location.longitude);

    try {
      await signup(formData, navigate);
    } catch (err: unknown) {
      const anyErr = err as { response?: { data?: unknown }; message?: string };
      console.error("Signup error:", anyErr);
      alert(`Signup failed: ${anyErr?.message ?? String(anyErr)}`);
    }
  };

  switch (currentStep) {
    case 1:
      return <Step1 onNext={() => setCurrentStep(2)} />;
    case 2:
      return (
        <Step2
          onNext={() => setCurrentStep(3)}
          onBack={() => setCurrentStep(1)}
        />
      );
    case 3:
      return (
        <Step3 onSubmit={handleFinalSubmit} onBack={() => setCurrentStep(2)} />
      );
    default:
      return <Step1 onNext={() => setCurrentStep(2)} />;
  }
}
