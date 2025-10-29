import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { Card } from "@/components";
import {
  getUserPreferences,
  updateUserPreferences,
} from "@/services/userPreferences.service";
import { useAuthStore } from "@/stores";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, Navigate } from "react-router-dom";
import type { IUserPreferences } from "@/types";

export function PreferencesTabContent() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: preferences,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userPreferences", user?.id],
    queryFn: () => getUserPreferences(user?.id || ""),
    enabled: !!user?.id,
  });

  const updateMutation = useMutation({
    mutationFn: (updatedPreferences: Partial<IUserPreferences>) =>
      updateUserPreferences(user?.id || "", {
        ...preferences!,
        ...updatedPreferences,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userPreferences", user?.id],
      });
    },
  });

  const handleToggle = (field: keyof IUserPreferences, value: boolean) => {
    updateMutation.mutate({ [field]: value });
  };

  const handleRadioChange = (updates: Partial<IUserPreferences>) => {
    updateMutation.mutate(updates);
  };

  const handleSelectChange = (field: keyof IUserPreferences, value: string) => {
    updateMutation.mutate({ [field]: value });
  };

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
    <Card className="p-4 mt-6">
      <span className="text-xl mt-6 ml-4 mr-4 mb-0">Notifications</span>
      <div className="divider mt-0 pt-0 border-0 mb-0"></div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Nouveaux messages</span>
          <span className="text-sm dark:text-slate-500">
            Recevez une notification lorsque vous recevez un nouveau message.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.notificationMessages || false}
          onChange={(e) =>
            handleToggle("notificationMessages", e.target.checked)
          }
          className="toggle toggle-lg toggle-primary"
        />
      </div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Réponses sur le forum</span>
          <span className="text-sm dark:text-slate-500">
            Recevez une notification lorsque quelqu'un répond à vos messages sur
            le forum.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.notificationForum || false}
          onChange={(e) => handleToggle("notificationForum", e.target.checked)}
          className="toggle toggle-lg toggle-primary"
        />
      </div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Rappels d'activité</span>
          <span className="text-sm dark:text-slate-500">
            Recevez des rappels pour les activités à venir auxquelles vous vous
            êtes inscrit.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.notificationActivities || false}
          onChange={(e) =>
            handleToggle("notificationActivities", e.target.checked)
          }
          className="toggle toggle-lg toggle-primary"
        />
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Remise des notifications
      </span>
      <div className="divider mt-0 pt-0 border-0 mb-0"></div>

      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Notifications par e-mail</span>
          <span className="text-sm dark:text-slate-500">
            Recevez des notifications par e-mail.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.emailUpdates || false}
          onChange={(e) => handleToggle("emailUpdates", e.target.checked)}
          className="toggle toggle-lg toggle-primary"
        />
      </div>

      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Notifications par SMS</span>
          <span className="text-sm dark:text-slate-500">
            Recevez des notifications par SMS.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.smsUpdates || false}
          onChange={(e) => handleToggle("smsUpdates", e.target.checked)}
          className="toggle toggle-lg toggle-primary"
        />
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4">
        <span className="text-base mb-6">Fréquence</span>
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.frequencyInstant || false}
            onChange={() =>
              handleRadioChange({
                frequencyInstant: true,
                frequencyDaily: false,
              })
            }
            className="radio radio-md ml-4 border-primary"
            name="frequency"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="frequency">Instantané</label>
            <span className="text-sm dark:text-slate-500">
              Recevez immédiatement les notifications.
            </span>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mb-4 -mt-3">
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.frequencyDaily || false}
            onChange={() =>
              handleRadioChange({
                frequencyInstant: false,
                frequencyDaily: true,
              })
            }
            className="radio radio-md ml-4 border-primary"
            name="frequency"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="frequency">Résumé quotidien</label>
            <span className="text-sm dark:text-slate-500">
              Recevez un résumé des notifications une fois par jour.
            </span>
          </div>
        </Card>
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Accessibilité
      </span>
      <div className="divider mt-0 pt-0 border-0 mb-0"></div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Taille de la police</span>
          <span className="text-sm dark:text-slate-500">
            Ajustez la taille de la police pour une meilleure lisibilité.
          </span>
        </div>
        <select
          className="select select-ghost w-full max-w-xs dark:bg-card"
          value={preferences?.fontSize || "medium"}
          onChange={(e) => handleSelectChange("fontSize", e.target.value)}
        >
          <option value="normal">Normale</option>
          <option value="medium">Moyenne</option>
          <option value="large">Grande</option>
        </select>
      </div>
      <div className="flex gap-auto justify-between items-center mr-4 mb-4">
        <div className="flex flex-col gap-3 ml-4 mr-4 mb-0">
          <span className="text-base">Mode contraste élevé</span>
          <span className="text-sm dark:text-slate-500">
            Activez le mode contraste élevé pour améliorer la lisibilité.
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.highContrast || false}
          onChange={(e) => handleToggle("highContrast", e.target.checked)}
          className="toggle toggle-lg toggle-primary"
        />
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Confidentialité
      </span>
      <div className="divider mt-0 pt-0 mb-0"></div>
      <span className="text-md dark:text-slate-500 ml-4 mr-4 -mt-2.5">
        Qui peut voir votre statut en ligne ?
      </span>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4">
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.statusVisibilityEverybody || false}
            onChange={() =>
              handleRadioChange({
                statusVisibilityEverybody: true,
                statusVisibilityFriends: false,
                statusVisibilityNoOne: false,
              })
            }
            className="radio radio-md ml-4 border-primary"
            name="visibility"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="visibility">Tout le monde</label>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4 -mt-4">
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.statusVisibilityFriends || false}
            onChange={() =>
              handleRadioChange({
                statusVisibilityEverybody: false,
                statusVisibilityFriends: true,
                statusVisibilityNoOne: false,
              })
            }
            className="radio radio-md ml-4 border-primary"
            name="visibility"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="visibility">Mes contacts</label>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mb-4 -mt-3">
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.statusVisibilityNoOne || false}
            onChange={() =>
              handleRadioChange({
                statusVisibilityEverybody: false,
                statusVisibilityFriends: false,
                statusVisibilityNoOne: true,
              })
            }
            className="radio radio-md ml-4 border-primary"
            name="visibility"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="visibility">Personne</label>
          </div>
        </Card>
      </div>

      <span className="text-md dark:text-slate-500 ml-4 mr-4 -mt-2.5">
        Qui peut vous envoyer des messages ?
      </span>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4">
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.messagesFromEverybody || false}
            onChange={() =>
              handleRadioChange({
                messagesFromEverybody: true,
                messagesFromFriends: false,
                messagesFromNoOne: false,
              })
            }
            className="radio radio-md ml-4 border-primary"
            name="messages"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="messages">Tout le monde</label>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-auto items-start ml-4 mr-4 -mt-3">
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.messagesFromFriends || false}
            onChange={() =>
              handleRadioChange({
                messagesFromEverybody: false,
                messagesFromFriends: true,
                messagesFromNoOne: false,
              })
            }
            className="radio radio-md ml-4 border-primary"
            name="messages"
          />
          <div className="flex flex-col ml-4">
            <label htmlFor="messages">Mes contacts</label>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-auto items-start ml-4 mr-4 mb-2 -mt-3">
        <Card className="flex flex-row w-full p-6 pl-4 items-center shadow-none">
          <input
            type="radio"
            checked={preferences?.messagesFromNoOne || false}
            onChange={() =>
              handleRadioChange({
                messagesFromEverybody: false,
                messagesFromFriends: false,
                messagesFromNoOne: true,
              })
            }
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
          <span className="text-sm dark:text-slate-500">
            Partager mes données avec des applications tierces
          </span>
        </div>
        <input
          type="checkbox"
          checked={preferences?.dataSharing || false}
          onChange={(e) => handleToggle("dataSharing", e.target.checked)}
          className="toggle toggle-lg"
        />
      </div>

      <span className="text-xl mt-6 ml-4 mr-4 mb-0" style={{ lineHeight: 0 }}>
        Compte
      </span>
      <div className="divider mt-0 pt-0 mb-0"></div>

      <Link to="/login" onClick={() => logout(navigate)}>
        <div className="btn btn-ghost pt-6 pb-6 dark:hover:bg-slate-800 flex justify-between ml-4 mr-4 -mt-4 mb-4">
          <span className="text-lg font-light text-red-600">Déconnexion</span>
          <Icon path={mdiChevronRight} size={1.2} className="text-slate-400" />
        </div>
      </Link>
    </Card>
  );
}
