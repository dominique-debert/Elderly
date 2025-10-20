import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { Card } from "@/components";
import { getUserPreferencesByUserId } from "@/services/userPreferences.service";
import { useAuthStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

export function PreferencesTabContent() {
  const { user, isAuthenticated } = useAuthStore();

  const {
    data: preferences,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userPreferences", user?.id],
    queryFn: () => getUserPreferencesByUserId(user?.id || ""),
    enabled: !!user?.id,
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return <div>Chargement des préférences...</div>;
  }

  if (error) {
    return (
      <div>
        Erreur: {error instanceof Error ? error.message : "Erreur inconnue"}
      </div>
    );
  }

  if (!preferences) {
    return <div>Aucune préférence trouvée</div>;
  }

  return (
    <Card className="border-0 p-[16px]">
      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Notifications
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Nouveaux messages</span>
          <span className="text-sm text-slate-500">
            Recevez une notification lorsque vous recevez un nouveau message.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.notificationMessages || false}
          className="toggle toggle-lg"
        />
      </div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Réponses sur le forum</span>
          <span className="text-sm text-slate-500">
            Recevez une notification lorsque quelqu'un répond à vos messages sur
            le forum.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.notificationForum || false}
          className="toggle toggle-lg"
        />
      </div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Rappels d'activité</span>
          <span className="text-sm text-slate-500">
            Recevez des rappels pour les activités à venir auxquelles vous vous
            êtes inscrit.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.notificationActivities || false}
          className="toggle toggle-lg"
        />
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Remise des notifications
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>

      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Notifications par e-mail</span>
          <span className="text-sm text-slate-500">
            Recevez des notifications par e-mail.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.emailUpdates || false}
          className="toggle toggle-lg"
        />
      </div>

      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Notifications par SMS</span>
          <span className="text-sm text-slate-500">
            Recevez des notifications par SMS.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.smsUpdates || false}
          className="toggle toggle-lg"
        />
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4">
        <span className="text-base mb-6">Fréquence</span>
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.frequencyInstant || false}
            className="radio radio-md ml-4 border-primary"
            name="frequency"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="frequency">Instantané</label>
            <span className="text-sm text-slate-500">
              Recevez immédiatement les notifications.
            </span>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mb-4 mt-[-12px]">
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.frequencyDaily || false}
            className="radio radio-md ml-4 border-primary"
            name="frequency"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="frequency">Résumé quotidien</label>
            <span className="text-sm text-slate-500">
              Recevez un résumé des notifications une fois par jour.
            </span>
          </div>
        </Card>
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Accessibilité
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Taille de la police</span>
          <span className="text-sm text-slate-500">
            Ajustez la taille de la police pour une meilleure lisibilité.
          </span>
        </div>
        <select
          className="select select-bordered w-full max-w-xs dark:bg-card"
          value={preferences?.fontSize || "medium"}
        >
          <option value="normal">Normale</option>
          <option value="medium">Moyenne</option>
          <option value="large">Grande</option>
        </select>
      </div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Mode contraste élevé</span>
          <span className="text-sm text-slate-500">
            Activez le mode contraste élevé pour améliorer la lisibilité.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.highContrast || false}
          className="toggle toggle-lg"
        />
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Confidentialité
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>
      <span className="text-md text-slate-500 ml-4 mr-4 mt-[-10px]">
        Qui peut voir votre statut en ligne ?
      </span>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4">
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.statusVisibilityEverybody || false}
            className="radio radio-md ml-4 border-primary"
            name="visibility"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="visibility">Tout le monde</label>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mt-[-12px]">
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.statusVisibilityFriends || false}
            className="radio radio-md ml-4 border-primary"
            name="visibility"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="visibility">Mes contacts</label>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mb-4 mt-[-12px]">
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.statusVisibilityNoOne || false}
            className="radio radio-md ml-4 border-primary"
            name="visibility"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="visibility">Personne</label>
          </div>
        </Card>
      </div>

      <span className="text-md text-slate-500 ml-4 mr-4 mt-[-10px]">
        Qui peut vous envoyer des messages ?
      </span>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4">
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.messagesFromEverybody || false}
            className="radio radio-md ml-4 border-primary"
            name="messages"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="messages">Tout le monde</label>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mt-[-12px]">
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.messagesFromFriends || false}
            className="radio radio-md ml-4 border-primary"
            name="messages"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="messages">Mes contacts</label>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mb-2 mt-[-12px]">
        <Card className="flex flex-row w-full p-6 pl-4 items-center">
          <input
            type="radio"
            checked={preferences?.messagesFromNoOne || false}
            className="radio radio-md ml-4 border-primary"
            name="messages"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="messages">Personne</label>
          </div>
        </Card>
      </div>

      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">
            Préférences en matière de partage des données
          </span>
          <span className="text-sm text-slate-500">
            Partager mes données avec des applications tierces
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.dataSharing || false}
          className="toggle toggle-lg"
        />
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Compte
      </span>
      <div className="border-slate-800 mt-0 pt-0 border-1 mb-0"></div>

      <div className="btn btn-ghost pt-6 pb-6 dark:hover:bg-slate-800 flex justify-between ml-4 mr-4">
        <span className="text-lg font-light">Modifier le mot de passe</span>
        <Icon path={mdiChevronRight} size={1.2} className="text-slate-400" />
      </div>
      <div className="btn btn-ghost pt-6 pb-6 dark:hover:bg-slate-800 flex justify-between ml-4 mr-4 mt-[-12px] mb-4">
        <span className="text-lg font-light text-red-600">Déconnexion</span>
        <Icon path={mdiChevronRight} size={1.2} className="text-slate-400" />
      </div>
    </Card>
  );
}
