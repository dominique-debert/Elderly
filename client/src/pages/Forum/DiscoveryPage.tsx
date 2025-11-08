import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Search, Bookmark, ChevronDown } from "lucide-react";

export function DiscoveryPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO : Reconcevoir la page de découverte : CECI EST UNE PAGE D'EXEMPLE POUR L'INSTANT */}
      <div className="mr-3 mt-20 flex gap-6 overflow-hidden">
        <div className="w-full">
          <div className="dark:bg-[#060e21] bg-(--root-bg) w-full">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h1 className="text-3xl font-medium leading-tight tracking-[-0.033em] dark:text-slate-300">
                Grille de découverte
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="grow">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full h-full">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-transparent items-center justify-center pl-4 rounded-l-3xl border border-r-0 border-gray-300 dark:border-gray-700">
                      <Search className="size-4" />
                    </div>
                    <input
                      className="form-input dark:bg-transparent flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-3xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-l-0 border-gray-300 dark:border-gray-700 bg-white h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 rounded-l-none text-base font-normal leading-normal"
                      placeholder="Rechercher par titre ou catégorie..."
                      value=""
                    />
                  </div>
                </label>
              </div>
              <div className="shrink-0">
                <button className="flex h-12 w-full sm:w-auto shrink-0 items-center justify-center gap-x-2 rounded-3xl bg-white dark:bg-transparent pl-4 pr-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                    Trier par : date d'enregistrement
                  </p>
                  <ChevronDown className="size-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors">
                Toutes les catégories
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/30 transition-colors">
                Design UI/UX
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30 transition-colors">
                Développement Web
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-500/30 transition-colors">
                Cuisine &amp; Recettes
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500/30 transition-colors">
                Productivité
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 transition-colors">
                Jeux
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyGap8xHx-yHw-MIVJq2ImFPkze0IQP2S7LKfu34thOcDqXUzJaTGnb_shUxmUw5Vmo7HJVhzbCln_6woV6QSJv9DuS5BgyZd71AJRZW3uRa-hxF1kjwVP1pbxoTSXK-dQIu09SpkoJWSTQM-cO4Dw1mVASSwV-jts-Lfx46rC0Gz4EKEJp6ihMog6wichAHyyjjf1i0of51piYvUKZNZaY_xc0YdXZT2yg9F_tpbW8Bc26UHnDbrT9JDGq3yKNH-fS-3dhev1EYs")',
                }}
              ></div>
              <div className="p-4 grow flex flex-col justify-between">
                <div>
                  <a
                    className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                    href="#"
                  >
                    Bonnes pratiques de design UI pour 2024
                  </a>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                    Découvrez les dernières tendances qui façonnent les
                    interfaces utilisateur cette année, des grilles bento à la
                    personnalisation pilotée par l'IA.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                    Design UI/UX • Alex Johnson
                  </p>
                  <button
                    className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                    title="Retirer des favoris"
                  >
                    <Bookmark className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfpVxcO0LnTOXEWrMksaY84uDLKpgwAC2Vcu5-gcRorS1g1klkp8g89yXjXyv9WUFSL9BLjwSp1FQA-se35rbBwRGo3Zq3FpP6LdCQ0DK5AlTaBmKxmoVK3UIppHeCOwF-J8BhiNNTiySMhmaginJPbP_TbEbLLsXhgnSXeP8d3h9tenym5B8ZA9Jl-9hfTE9BTM9jvxkf6Zi5Hh6Mmw7cWZp4kfJ8xFAsFpGdCb5duNwoXdei_kSB_V1T1fP5Gz6eEdLe4S_lbjQ")',
                }}
              ></div>
              <div className="p-4 grow flex flex-col justify-between">
                <div>
                  <a
                    className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                    href="#"
                  >
                    Commencer avec les Hooks React
                  </a>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                    Un guide complet pour les débutants afin de comprendre et
                    d'implémenter l'état et les effets dans les composants
                    fonctionnels.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                    Développement Web • Jane Doe
                  </p>
                  <button
                    className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                    title="Retirer des favoris"
                  >
                    <Bookmark className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWEI7T2q4Q33p3_Pss2SszqwHp7BesAAXkgh2DJehGa6kN8yXTEP60SAC_pCPVL5HsJkhDk9kTFPYUGmiDNIm7Yqmfu2MurWpAvX9Wd1uPy7iTIR9Rwc6XkeguDK3VBwc7LI3ade-BN_KTQUoD15X1shSBnOvXKmifHjbpnHFHlejqADBxX3uHTNVgOS8aaYVsc-7mVKMRJMQEpkFQGDzXcOZA2yergrHfxr9qH1nx5wFUTXQ_5kl2_v1l_Xe-hWcpAzQ1Srk4o_s")',
                }}
              ></div>
              <div className="p-4 grow flex flex-col justify-between">
                <div>
                  <a
                    className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                    href="#"
                  >
                    10 recettes rapides et saines pour les soirs de semaine
                  </a>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                    Marre des plats à emporter ? Ces recettes simples et
                    délicieuses sauveront vos soirs de semaine et votre budget.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                    Cuisine &amp; Recettes • Samwise G.
                  </p>
                  <button
                    className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                    title="Retirer des favoris"
                  >
                    <Bookmark className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZpn4WmrzO_fsZIC2D5hXDRVTKoVJ9XWgJHj1Z-ILed4QeV7R70Fdv8UZCUb2T75ZZQwQ4nlpl36it32oGp2FosOftj5HNP2lkbDuqNNWlClSCgOn_cb4yDvMjCzQLaCqEldeEpLiocu5Ptar0iu_xo0Q-gKLMUXfNwFi1d0WjpNQHG81E_VvMPQB8IPmi7Ar5UIAptOk3OfWhitcrcXD0O6PAHHOljh_Hh11sgpDcKSLIRjZ2c0Hv_lQ2-FGPoOSZWBSjTxkmJFw")',
                }}
              ></div>
              <div className="p-4 grow flex flex-col justify-between">
                <div>
                  <a
                    className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                    href="#"
                  >
                    Maîtriser la gestion du temps : la technique Pomodoro
                  </a>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                    Apprenez à améliorer votre concentration et votre
                    productivité avec cette méthode simple et efficace.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                    Productivité • Sarah Connor
                  </p>
                  <button
                    className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                    title="Retirer des favoris"
                  >
                    <Bookmark className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzw2gOjVQcBmKvB1IsfosA4JFFfnzFb9GKNcWghv7ta1fmhIicQGyMCXK6CIEQGgQ-s0LITotG-R_anb3xNFNT5XpS03xnnmpIxAdqVB7KMbrOQVqfM4_7KBzXyrUXTDTEiaJfmwlAApJp3qyl1EsoNezYIrfTz4FJtCot8wBgfjfc38ZD7DxUzVvXonCMStM4dN7sSybLxqt-TA-SdTGPBmqJ0G84_Ajimir4TNxE9InCGQdTyhkFCC6AIMn0CTtQ5yIjjtm-QvY")',
                }}
              ></div>
              <div className="p-4 grow flex flex-col justify-between">
                <div>
                  <a
                    className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                    href="#"
                  >
                    L'essor des jeux indépendants : pépites à découvrir
                  </a>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                    Plongez dans le monde vibrant du développement de jeux
                    indépendants et découvrez votre prochain titre favori.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                    Jeux • John Doe
                  </p>
                  <button
                    className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                    title="Retirer des favoris"
                  >
                    <Bookmark className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzw2gOjVQcBmKvB1IsfosA4JFFfnzFb9GKNcWghv7ta1fmhIicQGyMCXK6CIEQGgQ-s0LITotG-R_anb3xNFNT5XpS03xnnmpIxAdqVB7KMbrOQVqfM4_7KBzXyrUXTDTEiaJfmwlAApJp3qyl1EsoNezYIrfTz4FJtCot8wBgfjfc38ZD7DxUzVvXonCMStM4dN7sSybLxqt-TA-SdTGPBmqJ0G84_Ajimir4TNxE9InCGQdTyhkFCC6AIMn0CTtQ5yIjjtm-QvY")',
                }}
              ></div>
              <div className="p-4 grow flex flex-col justify-between">
                <div>
                  <a
                    className="text-gray-900 dark:text-white text-lg font-medium leading-tight hover:text-primary dark:hover:text-primary transition-colors line-clamp-2"
                    href="#"
                  >
                    L'avenir de l'IA : à quoi s'attendre dans la prochaine
                    décennie
                  </a>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
                    Un regard approfondi sur les avancées potentielles et les
                    considérations éthiques de l'intelligence artificielle.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-400 dark:text-gray-500 text-xs font-normal leading-normal">
                    Technologie • Dr. Elena Petrova
                  </p>
                  <button
                    className="text-amber-500 dark:text-amber-400 flex size-8 items-center justify-center rounded-full hover:bg-amber-500/10 transition-colors"
                    title="Retirer des favoris"
                  >
                    <Bookmark className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <nav
            aria-label="Pagination"
            className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 sm:px-0 mt-4 pt-4"
          >
            <div className="hidden sm:block">
              <p className="text-sm font-light text-gray-700 dark:text-gray-400">
                Affichage de
                <span className="font-medium"> 1 </span>à
                <span className="font-medium"> 10 </span>
                sur
                <span className="font-medium"> 20 </span>
                résultats
              </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
              <button className="btn btn-outline rounded-3xl">Précédent</button>
              <button className="relative ml-3 rounded-3xl btn btn-primary">
                Suivant
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
