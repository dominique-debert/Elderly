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
      <div className="mt-20 w-[calc(100%-6rem)] flex h-auto min-h-screen flex-col mr-3">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            <a
              className="text-slate-500 dark:text-slate-400 hover:text-primary text-base font-medium leading-normal"
              href="#"
            >
              Forum
            </a>
            <span className="text-slate-500 dark:text-slate-400 text-base font-medium leading-normal">
              /
            </span>
            <span className="text-slate-900 dark:text-white text-base font-medium leading-normal">
              Catégories
            </span>
          </div>
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
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Mes abonnements
            </h3>
            <div className="flex overflow-x-auto gap-4 py-2">
              <div className="shrink-0 flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-4" />
                  <a
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Centre technologique
                  </a>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  890 fils
                </span>
              </div>
              <div className="shrink-0 flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-4" />
                  <a
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Rats de bibliothèque
                  </a>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  450 fils
                </span>
              </div>
              <div className="shrink-0 flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-4" />
                  <a
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Science et Nature
                  </a>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  400 fils
                </span>
              </div>
              <div className="shrink-0 flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-4" />
                  <a
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Espace jeux
                  </a>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  2.5k fils
                </span>
              </div>
              <div className="shrink-0 flex items-center justify-between gap-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <Bell className="text-primary size-4" />
                  <a
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-primary"
                    href="#"
                  >
                    Cinéphiles
                  </a>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  780 fils
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <label className="flex flex-col min-w-40 h-12 w-full rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex w-full flex-1 items-stretch">
                <div className="text-slate-400 flex bg-white dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
                  <Search className="size-4" />
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  placeholder="Rechercher des catégories..."
                  value=""
                />
              </div>
            </label>
            <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                  <tr>
                    <th className="px-6 py-3" scope="col">
                      <div className="flex items-center gap-1">
                        <span>Catégorie</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronUp className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <div className="flex items-center gap-1">
                        <span>Fils</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronDown className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <div className="flex items-center gap-1">
                        <span>Date de création</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronDown className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <div className="flex items-center gap-1">
                        <span>Dernière activité</span>
                        <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                          <ChevronDown className="size-4 text-base" />
                        </button>
                      </div>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <span>Statut</span>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <span>Modérateurs</span>
                    </th>
                    <th className="px-6 py-3" scope="col">
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <MessagesSquare className="size-6 text-lg text-slate-500 dark:text-slate-400" />
                      Discussion générale
                    </th>
                    <td className="px-6 py-4">1.2k</td>
                    <td className="px-6 py-4">2023-01-15</td>
                    <td className="px-6 py-4">Il y a 2 heures</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-4">John Doe, Jane Smith</td>
                    <td className="px-6 py-4 text-right">
                      <button className="cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Computer className="size-6 text-slate-500 dark:text-slate-400" />
                      Centre technologique
                    </th>
                    <td className="px-6 py-4">890</td>
                    <td className="px-6 py-4">2023-02-01</td>
                    <td className="px-6 py-4">Il y a 30 minutes</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/50 px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-green-300">
                        Mis à jour
                      </span>
                    </td>
                    <td className="px-6 py-4">Alice Green</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90">
                        <Bell className="size-4" />
                        <span>Abonné</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Gamepad2 className="size-6 text-slate-500 dark:text-slate-400" />
                      Espace jeux
                    </th>
                    <td className="px-6 py-4">2.5k</td>
                    <td className="px-6 py-4">2023-03-10</td>
                    <td className="px-6 py-4">Il y a 1 jour</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-4">Bob Johnson, Charlie Day</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Book className="size-6 text-slate-500 dark:text-slate-400" />
                      Rats de bibliothèque
                    </th>
                    <td className="px-6 py-4">450</td>
                    <td className="px-6 py-4">2024-01-05</td>
                    <td className="px-6 py-4">Il y a 5 heures</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-sky-100 dark:bg-sky-900/50 px-2 py-0.5 text-xs font-semibold text-sky-700 dark:text-sky-300">
                        Nouveau
                      </span>
                    </td>
                    <td className="px-6 py-4">Emily White</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Film className="size-6 text-slate-500 dark:text-slate-400" />
                      Cinéphiles
                    </th>
                    <td className="px-6 py-4">780</td>
                    <td className="px-6 py-4">2023-04-20</td>
                    <td className="px-6 py-4">Il y a 12 heures</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-4">David Lee</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Music className="size-6 text-slate-500 dark:text-slate-400" />
                      Coin musique
                    </th>
                    <td className="px-6 py-4">620</td>
                    <td className="px-6 py-4">2023-05-18</td>
                    <td className="px-6 py-4">Il y a 7 heures</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-4">Sarah Davis</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Plane className="size-6 text-slate-500 dark:text-slate-400" />
                      Aventures de voyage
                    </th>
                    <td className="px-6 py-4">550</td>
                    <td className="px-6 py-4">2023-06-22</td>
                    <td className="px-6 py-4">Il y a 4 jours</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-4">Michael Chen</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Utensils className="size-6 text-slate-500 dark:text-slate-400" />
                      Cuisine et gastronomie
                    </th>
                    <td className="px-6 py-4">930</td>
                    <td className="px-6 py-4">2023-07-11</td>
                    <td className="px-6 py-4">Il y a 1 heure</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-4">Olivia Kim</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <th
                      className="px-6 py-6 font-medium text-slate-900 whitespace-nowrap dark:text-white flex items-center gap-4"
                      scope="row"
                    >
                      <Wrench className="size-6 text-slate-500 dark:text-slate-400" />
                      Bricolage et artisanat
                    </th>
                    <td className="px-6 py-4">240</td>
                    <td className="px-6 py-4">2023-08-01</td>
                    <td className="px-6 py-4">Il y a 2 jours</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Actif
                      </span>
                    </td>
                    <td className="px-6 py-4">Daniel Brown</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <Bell className="size-4" />
                        <span>S'abonner</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav className="flex items-center justify-center gap-2 pt-4">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                <ChevronLeft className="size-4" />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary bg-primary text-white"
                href="#"
              >
                1
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                2
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                3
              </a>
              <span className="text-slate-500 dark:text-slate-400">...</span>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                8
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                href="#"
              >
                <ChevronRight className="size-4" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
