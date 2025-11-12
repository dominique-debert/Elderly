import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import {
  Bell,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  MessagesSquare,
  Computer,
  Gamepad2,
  Book,
  Film,
  Music,
  Plane,
  Utensils,
  Wrench,
} from "lucide-react";

export function CategoriesPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Redesign the categories page: THIS IS A DUMMY PAGE FOR NOW */}
      <div className="mt-4 flex flex-col mr-3 overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap justify-between gap-4 items-center">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-3xl font-medium leading-tight tracking-[-0.033em] dark:text-slate-300">
                Découvrez les catégories du forum
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">
                Analyser les tendances, surveiller l'engagement et superviser
                toutes les catégories du forum.
              </p>
            </div>
          </div>
          <div className="p-4 w-full bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Mes abonnements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
              <div className="flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-3" />
                  <a
                    className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Centre technologique
                  </a>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  890 fils
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-3" />
                  <a
                    className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Rats de bibliothèque
                  </a>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  450 fils
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-3" />
                  <a
                    className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Science et Nature
                  </a>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  400 fils
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-3" />
                  <a
                    className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Espace jeux
                  </a>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  2.5k fils
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-3" />
                  <a
                    className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Cinéphiles
                  </a>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  780 fils
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <label className="flex flex-col min-w-40 h-10 w-full rounded-3xl border border-slate-200 dark:border-slate-700">
              <div className="flex w-full flex-1 items-stretch">
                <div className="text-slate-400 flex bg-white dark:bg-slate-800 items-center justify-center pl-4 rounded-l-3xl">
                  <Search className="size-3" />
                </div>
                <input
                  className="text-xs form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-3xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 font-normal leading-normal"
                  placeholder="Rechercher des catégories..."
                  value=""
                />
              </div>
            </label>
            <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <table className="w-full table-zebra table-fixed text-xs text-left text-slate-500 dark:text-slate-400">
                <thead className="text-xs text-slate-700 bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                  <tr>
                    <th className="px-6 py-3" scope="col">
                      <div className="text-xs flex items-center gap-1">
                        <span>Catégorie</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronUp className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <div className="text-xs flex items-center gap-1">
                        <span>Fils</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronDown className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <div className="text-xs flex items-center gap-1">
                        <span>Date de création</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronDown className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <div className="text-xs flex items-center gap-1">
                        <span>Dernière activité</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronDown className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="text-xs p-4 text-center" scope="col">
                      <span>Statut</span>
                    </th>
                    <th className="text-xs px-6 py-3" scope="col">
                      <span>Modérateurs</span>
                    </th>
                    <th className="px-6 py-3 text-xs text-center" scope="col">
                      <span>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <MessagesSquare className="size-4 text-lg text-slate-500 dark:text-slate-400" />
                      Discussion générale
                    </th>
                    <td className="p-4 text-center">1.2k</td>
                    <td className="p-4 text-center">2023-01-15</td>
                    <td className="p-4 text-center">Il y a 2 heures</td>
                    <td className="text-center">
                      <span className="badge badge-warning badge-xs">
                        Actif
                      </span>
                    </td>
                    <td className="p-4">John Doe, Jane Smith</td>
                    <td className="p-4 text-right">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Computer className="size-4 text-slate-500 dark:text-slate-400" />
                      Centre technologique
                    </th>
                    <td className="p-4">890</td>
                    <td className="p-4">2023-02-01</td>
                    <td className="p-4">Il y a 30 minutes</td>
                    <td className="text-center">
                      <span className="badge badge-success badge-xs">
                        Mis à jour
                      </span>
                    </td>
                    <td className="p-4">Alice Green</td>
                    <td className="text-center">
                      <button className="btn btn-secondary btn-xs">
                        <Bell className="size-3" />
                        <span>Abonné</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Gamepad2 className="size-4 text-slate-500 dark:text-slate-400" />
                      Espace jeux
                    </th>
                    <td className="p-4">2.5k</td>
                    <td className="p-4">2023-03-10</td>
                    <td className="p-4">Il y a 1 jour</td>
                    <td className="text-center">
                      <span className="badge badge-warning badge-xs">
                        Actif
                      </span>
                    </td>
                    <td className="p-4">Bob Johnson, Charlie Day</td>
                    <td className="text-center">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Book className="size-4 text-slate-500 dark:text-slate-400" />
                      Rats de bibliothèque
                    </th>
                    <td className="p-4">450</td>
                    <td className="p-4">2024-01-05</td>
                    <td className="p-4">Il y a 5 heures</td>
                    <td className="text-center">
                      <span className="badge badge-info badge-xs">Nouveau</span>
                    </td>
                    <td className="p-4">Emily White</td>
                    <td className="text-center">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Film className="size-4 text-slate-500 dark:text-slate-400" />
                      Cinéphiles
                    </th>
                    <td className="p-4">780</td>
                    <td className="p-4">2023-04-20</td>
                    <td className="p-4">Il y a 12 heures</td>
                    <td className="text-center">
                      <span className="badge badge-warning badge-xs">
                        Actif
                      </span>
                    </td>
                    <td className="p-4">David Lee</td>
                    <td className="text-center">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Music className="size-4 text-slate-500 dark:text-slate-400" />
                      Coin musique
                    </th>
                    <td className="p-4">620</td>
                    <td className="p-4">2023-05-18</td>
                    <td className="p-4">Il y a 7 heures</td>
                    <td className="text-center">
                      <span className="badge badge-warning badge-xs">
                        Actif
                      </span>
                    </td>
                    <td className="p-4">Sarah Davis</td>
                    <td className="text-center">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Plane className="size-4 text-slate-500 dark:text-slate-400" />
                      Aventures de voyage
                    </th>
                    <td className="p-4">550</td>
                    <td className="p-4">2023-06-22</td>
                    <td className="p-4">Il y a 4 jours</td>
                    <td className="text-center">
                      <span className="badge badge-warning badge-xs">
                        Actif
                      </span>
                    </td>
                    <td className="p-4">Michael Chen</td>
                    <td className="text-center">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Utensils className="size-4 text-slate-500 dark:text-slate-400" />
                      Cuisine et gastronomie
                    </th>
                    <td className="p-4">930</td>
                    <td className="p-4">2023-07-11</td>
                    <td className="p-4">Il y a 1 heure</td>
                    <td className="text-center">
                      <span className="badge badge-warning badge-xs">
                        Actif
                      </span>
                    </td>
                    <td className="p-4">Olivia Kim</td>
                    <td className="text-center">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-4 py-6 font-medium text-slate-900 dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Wrench className="size-4 text-slate-500 dark:text-slate-400" />
                      Bricolage et artisanat
                    </th>
                    <td className="p-4">240</td>
                    <td className="p-4">2023-08-01</td>
                    <td className="p-4">Il y a 2 jours</td>
                    <td className="text-center">
                      <span className="badge badge-warning badge-xs">
                        Actif
                      </span>
                    </td>
                    <td className="p-4">Daniel Brown</td>
                    <td className="text-center">
                      <button className="btn btn-ghost btn-xs">
                        <Bell className="size-3" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav className="flex items-center justify-center gap-2 pt-4">
              <a
                className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                <ChevronLeft className="size-3" />
              </a>
              <a
                className="text-xs inline-flex size-8 items-center justify-center rounded-lg border border-primary bg-primary text-white"
                href="#"
              >
                1
              </a>
              <a
                className="text-xs inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                2
              </a>
              <a
                className="text-xs inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                3
              </a>
              <span className="text-slate-500 dark:text-slate-400">...</span>
              <a
                className="text-xs inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                8
              </a>
              <a
                className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                <ChevronRight className="size-3" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
