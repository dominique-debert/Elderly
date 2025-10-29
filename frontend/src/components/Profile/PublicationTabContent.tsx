import { Card } from "@/components";
import { useAuthStore } from "@/stores";
import { Navigate } from "react-router-dom";

export function PublicationTabContent() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Card className="p-4 mt-6">
      <span className="text-xl mt-6 ml-4 mr-4 mb-0">A Propos</span>
      <div className="dark:border-slate-800 border-slate-200 mt-0 pt-0 border mb-0"></div>
      <span className="p-3 pt-0">{user?.description}</span>
      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Centres d'intérêt
      </span>
      <div className="dark:border-slate-800 border-slate-200 mt-0 pt-0 border mb-0"></div>
      <div className="flex gap-3 ml-4 mr-4 mb-0">
        <span className="badge p-4 bg-primary text-base text-white">
          Voyages
        </span>
        <span className="badge p-4 bg-primary text-base text-white">
          Lecture
        </span>
        <span className="badge p-4 bg-primary text-base text-white">
          Bénévolat
        </span>
        <span className="badge p-4 bg-primary text-base text-white">Arts</span>
        <span className="badge p-4 bg-primary text-base text-white">
          Culture
        </span>
      </div>
      <span className="text-xl mt-8 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Compétences
      </span>
      <div className="dark:border-slate-800 border-slate-200 mt-0 pt-0 border mb-0"></div>
      <div className="flex gap-3 ml-4 mr-4 mb-0">
        <span className="badge p-4 bg-primary text-base text-white">
          Communication
        </span>
        <span className="badge p-4 bg-primary text-base text-white">
          Organisation
        </span>
        <span className="badge p-4 bg-primary text-base text-white">
          Empathie
        </span>
        <span className="badge p-4 bg-primary text-base text-white">
          Adaptabilité
        </span>
      </div>
      <span className="text-xl mt-8 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Publications récentes
      </span>
      <div className="dark:border-slate-800 border-slate-200 mt-0 pt-0 border mb-0"></div>
      <div className="flex ml-4 mr-4 mb-0 w-full gap-10">
        <div className="flex flex-col w-full mt-1">
          <p className="dark:text-slate-400 text-xs">Publié dans Loisirs</p>
          <p className="font-semibold mt-2">Mon dernier projet de tricot</p>
          <p className="text-sm text-normal dark:text-slate-400 text-justify mt-2">
            Je travaille depuis quelque temps sur cette magnifique écharpe pour
            ma petite-fille. Elle est confectionnée en laine mérinos douce et
            présente un joli motif torsadé. J'ai hâte de voir sa réaction
            lorsqu'elle la recevra !
          </p>
        </div>
        <div className="w-full flex justify-end mt-0 mr-8">
          <img
            className="max-w-100 lg:max-w-200 w-full shadow-md rounded-xl"
            src="/images/tricot.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex ml-4 mr-4 mb-0 w-full gap-10">
        <div className="flex flex-col w-full mt-1">
          <p className="dark:text-slate-400 text-xs">
            Publié dans Actualités locales
          </p>
          <p className="font-semibold mt-2">
            Mise à jour sur le jardin communautaire
          </p>
          <p className="text-sm text-normal dark:text-slate-400 text-justify mt-2">
            Le jardin communautaire est en pleine forme ! Nous avons récolté une
            abondante récolte de tomates et de poivrons. Venez nous rejoindre
            pour une séance de jardinage ce samedi !
          </p>
        </div>
        <div className="w-full flex justify-end mt-0 mr-8">
          <img
            className="max-w-100 lg:max-w-200 w-full shadow-md rounded-xl"
            src="/images/jardin.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex ml-4 mb-0 w-full gap-10">
        <div className="flex flex-col w-full mt-1">
          <p className="dark:text-slate-400 text-xs">Publié dans santé</p>
          <p className="font-semibold mt-2">Conseils pour rester actif</p>
          <p className="text-sm text-normal dark:text-slate-400 text-justify mt-2">
            J'ai constaté que des promenades régulières et des exercices doux
            ont considérablement amélioré mon niveau d'énergie. Quels sont vos
            moyens préférés pour rester actif ?
          </p>
        </div>
        <div className="w-full flex justify-end mt-0 mr-8">
          <img
            className="max-w-100 lg:max-w-200 w-full shadow-md rounded-xl"
            src="/images/exercice.png"
            alt=""
          />
        </div>
      </div>
    </Card>
  );
}
