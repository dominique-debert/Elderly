import { Card } from "@/components";
import { useAuthStore } from "@/stores";
import { Navigate } from "react-router-dom";

export function PublicationTabContent() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Card className="border-0 p-[16px]">
      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        A Propos
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>
      <span className="p-3 pt-0">{user?.description}</span>
      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Centres d'intérêt
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>
      <div className="flex gap-3 ml-4 mr-4 mb-0">
        <span className="badge p-4 bg-primary text-base">Voyages</span>
        <span className="badge p-4 bg-primary text-base">Lecture</span>
        <span className="badge p-4 bg-primary text-base">Bénévolat</span>
        <span className="badge p-4 bg-primary text-base">Arts</span>
        <span className="badge p-4 bg-primary text-base">Culture</span>
      </div>
      <span className="text-xl mt-8 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Compétences
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>
      <div className="flex gap-3 ml-4 mr-4 mb-0">
        <span className="badge p-4 bg-primary text-base">Communication</span>
        <span className="badge p-4 bg-primary text-base">Organisation</span>
        <span className="badge p-4 bg-primary text-base">Empathie</span>
        <span className="badge p-4 bg-primary text-base">Adaptabilité</span>
      </div>
      <span className="text-xl mt-8 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Publications récentes
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>
      <div className="flex gap-3 ml-4 mr-4 mb-0 w-full gap-auto">
        <div className="flex flex-col">
          <p className="text-slate-400 text-sm">Publié dans Loisirs</p>
          <p className="font-semibold">Mon dernier projet de tricot</p>
          <p className="text-base text-normal text-slate-400">
            Je travaille depuis quelque temps sur cette magnifique écharpe pour
            ma petite-fille. Elle est confectionnée en laine mérinos douce et
            présente un joli motif torsadé. J'ai hâte de voir sa réaction
            lorsqu'elle la recevra !
          </p>
        </div>
        <div className="w-full flex justify-end m-4 mt-0">
          <img className="h-[225px] mr-4" src="/images/tricot.png" alt="" />
        </div>
      </div>
      <div className="flex gap-3 ml-4 mr-4 mb-0 w-full gap-auto">
        <div className="flex flex-col">
          <p className="text-slate-400 text-sm">
            Publié dans Actualités locales
          </p>
          <p className="font-semibold">
            Mise à jour sur le jardin communautaire
          </p>
          <p className="text-base text-normal text-slate-400">
            Le jardin communautaire est en pleine forme ! Nous avons récolté une
            abondante récolte de tomates et de poivrons. Venez nous rejoindre
            pour une séance de jardinage ce samedi !
          </p>
        </div>
        <div className="w-full flex justify-end m-4 mt-0">
          <img className="h-[225px] mr-4" src="/images/jardin.png" alt="" />
        </div>
      </div>
      <div className="flex gap-3 ml-4 mb-0 w-full gap-auto">
        <div className="flex flex-col">
          <p className="text-slate-400 text-sm">Publié dans santé</p>
          <p className="font-semibold">Conseils pour rester actif</p>
          <p className="text-base text-normal text-slate-400">
            J'ai constaté que des promenades régulières et des exercices doux
            ont considérablement amélioré mon niveau d'énergie. Quels sont vos
            moyens préférés pour rester actif ?
          </p>
        </div>
        <div className="w-full flex justify-end m-4 mt-0">
          <img
            className="h-[225px] w-[560px] mr-4"
            src="/images/exercice.png"
            alt=""
          />
        </div>
      </div>
    </Card>
  );
}
