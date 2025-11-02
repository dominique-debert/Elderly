import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";
import {
  ShieldPlus,
  Trash,
  FileInput,
  ShieldAlert,
  CircleCheck,
  EyeOff,
  UserRoundMinus,
  Pencil,
  Plus,
  Gavel,
  Search,
  ToggleRight,
  ToggleLeft,
} from "lucide-react";

export function ModerationPage() {
  const { isAuthenticated } = useAuthStore();

  const userActivityChartRef = useRef<Chart | null>(null);
  const moderationActionsChartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const gridColor = isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)";
    const tickColor = isDarkMode ? "#9CA3AF" : "#6B7280";
    const labelColor = isDarkMode ? "#E5E7EB" : "#374151";

    // destroy existing charts if any (prevents "Canvas is already in use")
    if (userActivityChartRef.current) {
      userActivityChartRef.current.destroy();
      userActivityChartRef.current = null;
    }
    if (moderationActionsChartRef.current) {
      moderationActionsChartRef.current.destroy();
      moderationActionsChartRef.current = null;
    }

    // User Activity Chart
    const userActivityCanvas = document.getElementById(
      "userActivityChart"
    ) as HTMLCanvasElement | null;
    if (userActivityCanvas) {
      const userActivityCtx = userActivityCanvas.getContext("2d");
      if (userActivityCtx) {
        userActivityChartRef.current = new Chart(userActivityCtx, {
          type: "line",
          data: {
            labels: [
              "Day 1",
              "Day 5",
              "Day 10",
              "Day 15",
              "Day 20",
              "Day 25",
              "Day 30",
            ],
            datasets: [
              {
                label: "Nouveaux Utilisateurs",
                data: [12, 19, 15, 25, 22, 30, 28],
                borderColor: "#4A90E2",
                backgroundColor: "rgba(74, 144, 226, 0.1)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
              {
                label: "Utilisateurs Actifs",
                data: [30, 35, 40, 38, 45, 42, 50],
                borderColor: "#2ECC71",
                backgroundColor: "rgba(46, 204, 113, 0.1)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: { color: labelColor },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: gridColor },
                ticks: { color: tickColor },
              },
              x: {
                grid: { color: "transparent" },
                ticks: { color: tickColor },
              },
            },
          },
        });
      }
    }

    // Moderation Actions Chart
    const moderationActionsCanvas = document.getElementById(
      "moderationActionsChart"
    ) as HTMLCanvasElement | null;
    if (moderationActionsCanvas) {
      const moderationActionsCtx = moderationActionsCanvas.getContext("2d");
      if (moderationActionsCtx) {
        moderationActionsChartRef.current = new Chart(moderationActionsCtx, {
          type: "doughnut",
          data: {
            labels: [
              "Publications supprimées",
              "Utilisateurs suspendus",
              "Utilisateurs bannis",
            ],
            datasets: [
              {
                label: "Actions entreprises",
                data: [50, 25, 10],
                backgroundColor: ["#4A90E2", "#F39C12", "#E74C3C"],
                borderColor: isDarkMode ? "#101622" : "#F4F7F9",
                borderWidth: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: { color: labelColor, boxWidth: 12, padding: 20 },
              },
            },
            cutout: "70%",
          },
        });
      }
    }

    return () => {
      if (userActivityChartRef.current) {
        userActivityChartRef.current.destroy();
        userActivityChartRef.current = null;
      }
      if (moderationActionsChartRef.current) {
        moderationActionsChartRef.current.destroy();
        moderationActionsChartRef.current = null;
      }
    };
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Redesign the moderation page: THIS IS A DUMMY PAGE FOR NOW */}
      <div className="ml-62 mr-2 pt-14 w-[calc(100vw-15rem)] min-h-[calc(100vh-4rem)] flex gap-6">
        <div className="flex min-h-screen w-full">
          <div className="flex-1 p-8 overflow-y-auto">
            <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <p className="text-4xl font-medium leading-tight tracking-[-0.033em]">
                Tableau de bord
              </p>
              <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg">
                <Plus className="size-4" />
                Nouveau sujet
              </button>
            </header>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <p className="text-black dark:text-gray-300 text-base font-medium leading-normal">
                  Approbations en attente
                </p>
                <p className="text-3xl font-bold leading-tight">12</p>
                <p className="text-success text-sm font-medium leading-normal">
                  +2% cette semaine
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <p className="text-black dark:text-gray-300 text-base font-medium leading-normal">
                  Publications signalées
                </p>
                <p className="text-3xl font-bold leading-tight">5</p>
                <p className="text-destructive text-sm font-medium leading-normal">
                  -5% cette semaine
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <p className="text-black dark:text-gray-300 text-base font-medium leading-normal">
                  Nouveaux utilisateurs aujourd'hui
                </p>
                <p className="text-3xl font-bold leading-tight">28</p>
                <p className="text-success text-sm font-medium leading-normal">
                  +10% aujourd'hui
                </p>
              </div>
            </section>
            <section className="mt-12 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Journal de modération
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral size-4 dark:text-gray-400" />
                    <input
                      className="input w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-300 focus:ring-primary focus:border-primary"
                      placeholder="Rechercher dans le journal..."
                      type="text"
                    />
                  </div>
                  <select className="select p-2 text-sm w-full sm:w-auto bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-300 focus:ring-primary focus:border-primary">
                    <option>Toutes les actions</option>
                    <option>Bannir un utilisateur</option>
                    <option>Supprimer la publication</option>
                    <option>Déplacer le sujet</option>
                    <option>Avertir l'utilisateur</option>
                  </select>
                </div>
              </div>
              <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden flex-1 flex flex-col">
                <div className="overflow-y-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-neutral dark:text-gray-400 uppercase bg-gray-50 dark:bg-white/5 sticky top-0 z-10">
                      <tr>
                        <th className="px-6 py-3" scope="col">
                          Sévérité
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Modérateur
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Action
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Cible
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Date et heure
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-red-500">
                          Critique
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          AdminUser
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4">
                            <ShieldPlus className="size-5 text-red-500" />
                            <span className="font-medium text-red-500">
                              Utilisateur banni
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            SpamBot123
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-26 14:30:15
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-warning">
                          Élevé
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          ModJane
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4">
                            <Trash className="size-4 text-warning" />
                            <span className="font-medium text-warning">
                              Publication supprimée
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            Publication #54321
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-26 11:05:42
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-primary">
                          Normal
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          ModJohn
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4">
                            <FileInput className="size-4 text-primary" />
                            <span className="font-medium text-primary">
                              Sujet déplacé
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            Fil de retours
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-25 18:15:00
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-neutral dark:text-gray-400">
                          Faible
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          AdminUser
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4">
                            <ShieldAlert className="size-4 text-neutral dark:text-gray-400" />
                            <span className="font-medium text-neutral dark:text-gray-400">
                              Utilisateur averti
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            RuleBreaker22
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-25 09:20:11
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-warning">
                          Élevé
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          ModJane
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4">
                            <Trash className="size-4 text-warning" />
                            <span className="font-medium text-warning">
                              Publication supprimée
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            Publication #54299
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-24 21:45:33
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-red-500">
                          Critique
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          AdminUser
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4 text-red-500">
                            <ShieldPlus className="size-4 text-red-500" />
                            <span className="font-medium text-red-500">
                              Utilisateur banni
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            ToxicUser77
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-24 10:10:00
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-success">
                          Faible
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          ModJohn
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4 text-success">
                            <CircleCheck className="size-4" />
                            <span className="font-medium">
                              Publication approuvée
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            Publication #54350
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-23 16:00:00
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-warning">
                          Élevé
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          ModSarah
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4 text-warning">
                            <EyeOff className="size-4" />
                            <span className="font-medium">Sujet masqué</span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            "Controversial Thread"
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-23 09:45:00
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-neutral dark:text-gray-400">
                          Normal
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          AdminUser
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4">
                            <UserRoundMinus className="size-4 text-neutral dark:text-gray-400" />
                            <span className="font-medium text-neutral dark:text-gray-400">
                              Rôle supprimé
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            UserBetaTester
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-22 14:00:00
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="px-6 py-2.5 font-bold text-primary">
                          Normal
                        </td>
                        <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-white">
                          ModJane
                        </td>
                        <td className="px-6 py-2.5">
                          <div className="flex items-center gap-4 text-primary">
                            <Pencil className="size-4" />
                            <span className="font-medium">
                              Publication modifiée
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-2.5">
                          <a className="text-primary hover:underline" href="#">
                            Publication #54280
                          </a>
                        </td>
                        <td className="px-6 py-2.5 text-xs">
                          2023-10-22 08:30:00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between items-center p-4">
                  <span className="text-sm font-normal text-neutral dark:text-gray-400">
                    Affichage{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1-10
                    </span>{" "}
                    sur{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      250
                    </span>
                  </span>
                  <div className="inline-flex -space-x-px text-sm h-8">
                    <a
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      href="#"
                    >
                      Précédent
                    </a>
                    <a
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      href="#"
                    >
                      Suivant
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Configuration des alertes
                </h2>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg">
                  <Plus className="size-4" />
                  Nouvelle règle d'alerte
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        Volume élevé de signalements
                      </h3>
                      <p className="text-sm h-16 text-neutral dark:text-gray-400">
                        Se déclenche si &gt;10 signalements en 1 heure.
                      </p>
                    </div>
                    <div className="relative inline-block ml-2 mt-0.5 align-middle transition duration-200 ease-in">
                      <input
                        defaultChecked
                        className="toggle toggle-primary toggle-xs"
                        id="toggle1"
                        name="toggle"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                      Canaux de notification
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                        <span className="material-symbols-outlined text-lg text-success">
                          <ToggleRight className="size-4" />
                        </span>
                        <span className="text-xs">Tableau de bord</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                        <span className="material-symbols-outlined text-lg text-success">
                          <ToggleRight className="size-4" />
                        </span>
                        <span className="text-xs">Email</span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <button className="text-sm font-medium text-primary hover:underline">
                      Modifier la règle
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        Nouvelles inscriptions
                      </h3>
                      <p className="text-sm h-16 text-neutral dark:text-gray-400">
                        Se déclenche pour chaque nouvel utilisateur.
                      </p>
                    </div>
                    <div className="relative inline-block ml-2 mt-0.5 align-middle transition duration-200 ease-in">
                      <input
                        className="toggle toggle-primary toggle-xs"
                        id="toggle2"
                        name="toggle"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                      Canaux de notification
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                        <span className="material-symbols-outlined text-lg text-neutral dark:text-gray-400">
                          <ToggleLeft className="size-4" />
                        </span>
                        <span className="text-xs">Tableau de bord</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                        <span className="material-symbols-outlined text-lg text-neutral dark:text-gray-400">
                          <ToggleLeft className="size-4" />
                        </span>
                        <span className="text-xs">Email</span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <button className="text-sm font-medium text-primary hover:underline">
                      Modifier la règle
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        Détection de mots-clés
                      </h3>
                      <p className="text-sm text-neutral h-16 dark:text-gray-400">
                        Surveille des mots-clés spécifiques.
                      </p>
                    </div>
                    <div className="relative inline-block ml-2 mt-0.5 align-middle transition duration-200 ease-in">
                      <input
                        className="toggle toggle-primary toggle-xs"
                        id="toggle3"
                        name="toggle"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
                      Canaux de notification
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                        <span className="material-symbols-outlined text-lg text-success">
                          <ToggleRight className="size-4" />
                        </span>
                        <span className="text-xs">Tableau de bord</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                        <span className="material-symbols-outlined text-lg text-success">
                          <ToggleRight className="size-4" />
                        </span>
                        <span className="text-xs">Email</span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <button className="text-sm font-medium text-primary hover:underline">
                      Modifier la règle
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Rapports et analyses
                </h2>
                <div className="flex items-center gap-2">
                  <select
                    defaultValue="30"
                    className="select bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-800 dark:text-gray-300 focus:ring-primary focus:border-primary"
                  >
                    <option value="7">7 derniers jours</option>
                    <option value="30">30 derniers jours</option>
                    <option value="90">90 derniers jours</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Activité des utilisateurs
                  </h3>
                  <div className="h-80">
                    <canvas id="userActivityChart"></canvas>
                  </div>
                </div>
                <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Actions de modération
                  </h3>
                  <div className="h-80">
                    <canvas id="moderationActionsChart"></canvas>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Sujets les plus populaires
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Annonces : Nouvelles fonctionnalités du forum
                        </p>
                        <p className="text-sm text-neutral dark:text-gray-400">
                          1 204 vues • 89 réponses
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        Voir
                      </a>
                    </li>
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Hors sujet : À quoi jouez-vous ?
                        </p>
                        <p className="text-sm text-neutral dark:text-gray-400">
                          987 vues • 215 réponses
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        Voir
                      </a>
                    </li>
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Retour d'expérience : Expérience de l'application
                          mobile
                        </p>
                        <p className="text-sm text-neutral dark:text-gray-400">
                          756 vues • 56 réponses
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        Voir
                      </a>
                    </li>
                    <li className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Discussion générale : Bonnes pratiques pour...
                        </p>
                        <p className="text-sm text-neutral dark:text-gray-400">
                          602 vues • 42 réponses
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        Voir
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Vue d'ensemble des signalements
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800 dark:text-gray-300">
                        Total des signalements reçus
                      </p>
                      <span className="font-bold text-lg text-black dark:text-white">
                        152
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800 dark:text-gray-300">
                        Signalements résolus
                      </p>
                      <span className="font-bold text-lg text-success">
                        148
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800 dark:text-gray-300">
                        Signalements en attente
                      </p>
                      <span className="font-bold text-lg text-warning">4</span>
                    </div>
                    <div className="pt-4 mt-4 border-t border-gray-200 dark:border-white/10">
                      <p className="text-sm text-neutral dark:text-gray-400">
                        Temps moyen de résolution : <strong>2,5 heures</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Gestion des utilisateurs
                </h2>
                <div className="w-full md:w-auto md:max-w-xs">
                  <label className="flex flex-col h-11 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <div className="text-neutral dark:text-gray-400 flex items-center justify-center pl-3">
                        <Search className="size-4" />
                      </div>
                      <input
                        className="input flex w-full min-w-0 flex-1 resize-none overflow-hidden focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-neutral dark:placeholder:text-gray-500 px-2 text-base font-normal leading-normal"
                        placeholder="Rechercher des utilisateurs..."
                        defaultValue=""
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-neutral dark:text-gray-400 uppercase bg-gray-50 dark:bg-white/5">
                      <tr>
                        <th className="p-4" scope="col">
                          <div className="flex items-center">
                            <input
                              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              id="checkbox-all"
                              type="checkbox"
                            />
                            <label className="sr-only" htmlFor="checkbox-all">
                              case à cocher
                            </label>
                          </div>
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Nom d'utilisateur
                        </th>
                        <th className="px-6 py-3" scope="col">
                          E‑mail
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Inscrit
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Statut
                        </th>
                        <th className="px-6 py-3" scope="col">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              id="checkbox-table-1"
                              type="checkbox"
                            />
                            <label
                              className="sr-only"
                              htmlFor="checkbox-table-1"
                            >
                              case à cocher
                            </label>
                          </div>
                        </td>
                        <th
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          scope="row"
                        >
                          Alice.Johnson
                        </th>
                        <td className="px-6 py-4">alice.j@example.com</td>
                        <td className="px-6 py-4">2023-03-15</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
                            Actif
                          </span>
                        </td>
                        <td className="px-6 py-4 flex items-center gap-2">
                          <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/20">
                            <Pencil className="size-4 text-neutral dark:text-gray-400" />
                          </button>
                          <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/20">
                            <Gavel className="size-4 text-neutral dark:text-gray-400" />
                          </button>
                          <button className="p-1.5 rounded-md hover:bg-destructive/10">
                            <ShieldPlus className="size-4 text-destructive" />
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              id="checkbox-table-2"
                              type="checkbox"
                            />
                            <label
                              className="sr-only"
                              htmlFor="checkbox-table-2"
                            >
                              case à cocher
                            </label>
                          </div>
                        </td>
                        <th
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          scope="row"
                        >
                          Bob.Smith
                        </th>
                        <td className="px-6 py-4">bob.s@example.com</td>
                        <td className="px-6 py-4">2023-02-20</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning">
                            Suspendu
                          </span>
                        </td>
                        <td className="px-6 py-4 flex items-center gap-2">
                          <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/20">
                            <Pencil className="size-4 text-neutral dark:text-gray-400" />
                          </button>
                          <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/20">
                            <Gavel className="size-4 text-neutral dark:text-gray-400" />
                          </button>
                          <button className="p-1.5 rounded-md hover:bg-destructive/10">
                            <ShieldPlus className="size-4 text-destructive" />
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-white/10">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              id="checkbox-table-3"
                              type="checkbox"
                            />
                            <label
                              className="sr-only"
                              htmlFor="checkbox-table-3"
                            >
                              case à cocher
                            </label>
                          </div>
                        </td>
                        <th
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          scope="row"
                        >
                          Charlie.Brown
                        </th>
                        <td className="px-6 py-4">charlie.b@example.com</td>
                        <td className="px-6 py-4">2022-11-01</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                            Banni
                          </span>
                        </td>
                        <td className="px-6 py-4 flex items-center gap-2">
                          <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/20">
                            <Pencil className="size-4 text-neutral dark:text-gray-400" />
                          </button>
                          <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/20">
                            <Gavel className="size-4 text-neutral dark:text-gray-400" />
                          </button>
                          <button className="p-1.5 rounded-md hover:bg-destructive/10">
                            <ShieldPlus className="size-4 text-destructive" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between items-center p-4">
                  <span className="text-sm font-normal text-neutral dark:text-gray-400">
                    Affichage{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1-3
                    </span>{" "}
                    sur{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      100
                    </span>
                  </span>
                  <div className="inline-flex -space-x-px text-sm h-8">
                    <a
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      href="#"
                    >
                      Précédent
                    </a>
                    <a
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
                      href="#"
                    >
                      Suivant
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
