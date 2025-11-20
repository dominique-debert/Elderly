import {
  Hamburger,
  Brush,
  Code,
  BrainCircuit,
  Megaphone,
  Bookmark,
  Search,
  ChevronsUpDown,
  ListFilter,
  ChevronDown,
} from "lucide-react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

export function BookmarksPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Refonte de la page des favoris : PAGE DUMMY POUR L'INSTANT */}
      <div className="mr-4 pt-20 min-h-[calc(100vh-4rem)] flex gap-6">
        <div className="flex min-h-screen w-full">
          <div className="flex-1">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h1 className="text-3xl font-medium leading-tight tracking-[-0.033em] dark:text-slate-300">
                Mes Favoris
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="grow">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-gray-800/50 items-center justify-center pl-4 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-700">
                      <Search className="size-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-l-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 rounded-l-none text-base font-normal leading-normal"
                      placeholder="Rechercher par titre ou contenu..."
                      value=""
                    />
                  </div>
                </label>
              </div>
              <div className="relative flex items-center gap-4">
                <div className="shrink-0">
                  <button
                    className="flex h-12 w-full sm:w-auto shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800/50 pl-4 pr-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    id="categoryFilterButton"
                  >
                    <ListFilter className="size-5 text-gray-400 dark:text-gray-500 text-base" />

                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                      Catégories
                    </p>
                    <ChevronDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                  </button>
                  <div
                    className="absolute z-10 mt-2 w-80 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden"
                    id="advancedFilterPanel"
                  >
                    <div className="p-4">
                      <p className="text-gray-900 dark:text-white font-medium mb-3">
                        Filtrer par catégorie
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="checkbox checkbox-primary checkbox-xs text-primary bg-transparent focus:outline-none"
                            type="checkbox"
                          />
                          <span>Conception UI/UX</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="checkbox checkbox-primary checkbox-xs text-primary bg-transparent focus:outline-none"
                            type="checkbox"
                          />
                          <span>Développement Web</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="checkbox checkbox-primary checkbox-xs text-primary bg-transparent focus:outline-none"
                            type="checkbox"
                          />
                          <span>Cuisine</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="checkbox checkbox-primary checkbox-xs text-primary bg-transparent focus:outline-none"
                            type="checkbox"
                          />
                          <span>Productivité</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="checkbox checkbox-primary checkbox-xs text-primary bg-transparent focus:outline-none"
                            type="checkbox"
                          />
                          <span>Marketing</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <input
                            className="checkbox checkbox-primary checkbox-xs text-primary bg-transparent focus:outline-none"
                            type="checkbox"
                          />
                          <span>IA/ML</span>
                        </label>
                      </div>
                      <p className="text-gray-900 dark:text-white font-medium mb-3">
                        Exclusions de mots-clés
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-3 text-sm font-normal leading-normal"
                        placeholder="Exclure des mots-clés (ex.: 'React', 'IA')"
                        value=""
                      />
                      <div className="flex justify-end gap-2 mt-4">
                        <button className="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          Effacer
                        </button>
                        <button className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                          Appliquer les filtres
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <button className="flex h-12 w-full sm:w-auto shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800/50 pl-4 pr-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                      Trier par : Date d'enregistrement
                    </p>
                    <ChevronDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                  <thead>
                    <tr>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Titre &amp; Description</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Catégorie</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Auteur</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-[120px]"
                        scope="col"
                      >
                        <div className="flex items-center gap-1">
                          <span>Date d'enregistrement</span>
                          <ChevronsUpDown className="size-5 text-gray-400 dark:text-gray-500 text-base" />
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-16"
                        scope="col"
                      >
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Brush className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              Bonnes pratiques de design UI pour 2024 : des
                              grilles Bento à la personnalisation pilotée par
                              l'IA
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Découvrez les dernières tendances qui façonnent
                              les interfaces utilisateur cette année, des
                              grilles Bento à la personnalisation pilotée par
                              l'IA.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Conception UI/UX
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Alex Johnson
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        26 oct. 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Retirer des favoris"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Code className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              Commencer avec les Hooks React : guide complet
                              pour débutants
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Un guide complet pour aider les débutants à
                              comprendre et implémenter l'état et les effets
                              dans les composants fonctionnels.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Développement Web
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Jane Doe
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        22 oct. 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Retirer des favoris"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Hamburger className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              10 recettes rapides et saines pour les repas en
                              semaine
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Marre des plats à emporter ? Ces recettes simples
                              et délicieuses vous feront gagner du temps en
                              semaine et épargneront votre portefeuille.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Cuisine &amp; Recettes
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Samwise G.
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        19 oct. 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Retirer des favoris"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <BrainCircuit className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              Comprendre les biais cognitifs dans la prise de
                              décision
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Explorez les biais cognitifs courants et comment
                              ils influencent nos jugements, avec des conseils
                              pratiques pour en atténuer les effets.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Productivité
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Sarah Connor
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        15 oct. 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Retirer des favoris"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50 shrink-0 size-10">
                            <Megaphone className="size-6" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <a
                              className="text-gray-900 dark:text-white text-sm font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                              href="#"
                            >
                              Stratégies SEO avancées pour les petites
                              entreprises en 2024
                            </a>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-tight mt-1 line-clamp-2">
                              Boostez votre présence en ligne avec ces
                              techniques SEO de pointe adaptées aux petites
                              entreprises et startups.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Marketing
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        Mark Webber
                      </td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-300 align-top">
                        10 oct. 2023
                      </td>
                      <td className="p-4 text-right align-top">
                        <button
                          className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors ml-auto"
                          title="Retirer des favoris"
                        >
                          <Bookmark className="size-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <nav
              aria-label="Pagination"
              className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 sm:px-0 mt-8 pt-6"
            >
              <div className="hidden sm:block">
                <p className="text-sm font-light text-gray-700 dark:text-gray-400">
                  Affichage de <span className="font-medium">1</span> à{" "}
                  <span className="font-medium">5</span> sur{" "}
                  <span className="font-medium">20</span> résultats
                </p>
              </div>
              <div className="flex flex-1 justify-between sm:justify-end">
                <a
                  className="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  href="#"
                >
                  Précédent
                </a>
                <a
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  href="#"
                >
                  Suivant
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
