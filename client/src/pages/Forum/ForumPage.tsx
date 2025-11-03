import { Bell, Rocket, Flame, Search, Plus } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";

export function ForumPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Reconcevoir la page du forum : CECI EST UNE PAGE TEMPORAIRE POUR L'INSTANT */}
      <div className="mr-4 mt-20 gap-6 flex flex-col">
        <div className="flex flex-col gap-6 bg-transparent! border-0 w-full">
          <span className="text-2xl w-full lg:text-3xl font-medium text-slate-900 dark:text-slate-300">
            Bienvenue sur le forum, {user?.firstName}!
          </span>
          <div className="bg-white dark:bg-card p-2 rounded-3xl border border-slate-200 dark:border-gray-700">
            <label className="flex flex-col w-full">
              <div className="flex w-full rounded-lg">
                <div className="text-slate-400 bg-transparent dark:text-slate-500 flex items-center justify-center pl-3 rounded-l-3xl border border-slate-200 dark:border-none border-r-0">
                  <Search className="size-4" />
                </div>
                <input
                  className="bg-transparent flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-slate-300 focus:outline-0 focus:ring-0 focus:border-primary h-full placeholder:text-slate-400 dark:placeholder:text-[#9da6b9] px-4 rounded-l-none border border-slate-200 dark:border-none border-l-0 pl-4 text-sm font-normal leading-normal"
                  placeholder="Recherche rapide..."
                />
              </div>
            </label>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-gray-700">
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl h-10 btn-primary text-sm font-bold leading-normal tracking-[0.015em] gap-3">
              <Plus className="size-4" />
              <span className="truncate">Démarrer une nouvelle discussion</span>
            </button>
          </div>
          <div className="bg-white dark:bg-card p-5 rounded-xl border border-slate-200 dark:border-gray-700 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Votre activité
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">27</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Messages au total
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">124</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Réactions
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-card p-5 rounded-xl border border-slate-200 dark:border-gray-700 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Tags populaires
            </h3>
            <div className="flex flex-wrap gap-2">
              <a
                className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                href="#"
              >
                #webdev
              </a>
              <a
                className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                href="#"
              >
                #design
              </a>
              <a
                className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                href="#"
              >
                #carrière
              </a>
              <a
                className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                href="#"
              >
                #aide
              </a>
              <a
                className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                href="#"
              >
                #mobile
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-gray-700 relative p-6 pattern-api">
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                <Flame className="text-red-500 dark:text-red-400 w-5 h-5" />
                Sujets populaires
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    alt="User Avatar"
                    className="size-8 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCawXEIcOQT1lOHAaKm3hqsQxh8jHCLDwu4JN4wmtYl8pwsjsmOz6I8qZ2TLGpgCV5HLUtE4xRRSdHaQ_uJ-o3yc25CnAsmyBK67HeG5dl-pWc-LJCmV_pK4KPm39P15vBw-aDKQ6wI-3qsc-0PtKHN1Z_ozDyOdn1AEhzSkFirIRFo-a8fhGn6c0WclWIToyX-E4wWcLu131n55C0eAkrmkvz01NYLszoPDmoWP7BF7t8hA_9-S-dVStDYiBBU9UGrBFXZfkP4w2s"
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Alice Johnson
                      </span>{" "}
                      dans{" "}
                      <span className="text-primary">Développement d'API</span>
                    </p>
                    <a className="text-slate-900 dark:text-white font-semibold hover:text-primary cursor-pointer text-lg">
                      Bonnes pratiques pour la conception d'API
                    </a>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Un fil de discussion pour partager des conseils sur la
                      création d'API robustes et évolutives.
                    </p>
                  </div>
                  <div className="text-center text-sm text-slate-500 dark:text-slate-400 w-20 shrink-0 ml-auto">
                    <p className="font-bold text-lg text-slate-700 dark:text-slate-300">
                      15
                    </p>
                    <p>Messages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-slate-200 dark:border-gray-700">
                  <img
                    alt="User Avatar"
                    className="size-8 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOvIT3lBzoHHlHy6d89LXTzm1S4jcp7ecqkFSNYldp3aneWBYJDjI4dL7qPdfjV3iF_ZaiE6jLm-4oywbH6lOr0fK_q89SeReUNEYQTi0xzTs7O3JK-9trUr6IAYu2MPVBV20TK-vcYNaNyygQ1GTA1chkryiR56aI0R-gXodlUtMnzrHtFdDcqaHRBFSYF3CFvfg_l3dtklGkHp6FEveQzseBjknnpTucZdkMuceFORgeMhr4QR9_Rx0EptK_yAW0KPtUgG4qAws"
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Bob Williams
                      </span>{" "}
                      dans <span className="text-primary">Front-end</span>
                    </p>
                    <a className="text-slate-900 dark:text-white font-semibold hover:text-primary cursor-pointer text-lg">
                      Frameworks CSS : Tailwind vs Bootstrap
                    </a>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Quel framework utility-first convient le mieux à votre
                      prochain projet ?
                    </p>
                  </div>
                  <div className="text-center text-sm text-slate-500 dark:text-slate-400 w-20 shrink-0 ml-auto">
                    <p className="font-bold text-lg text-slate-700 dark:text-slate-300">
                      51
                    </p>
                    <p>Messages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-gray-700 relative p-6 pattern-frontend">
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                <Rocket className="text-green-500 dark:text-green-400 w-5 h-5" />
                Nouveautés dans vos catégories suivies
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    alt="User Avatar"
                    className="size-8 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSgnS-C7rWlNL9lF-A8V1Bc43__7mLemcNJyxJLFKEOUeHhZ8RkjySHu2gEvX3AV207bQXlBS2XxPy9S6dKnmrQLjokAPSKHvtCCx2ECEYoD1xhDK1pakDzUb_r0IYeKRVCGR9o-PT5CpIui7CRLm8DDo8ScZuADClqFi0rfNKpE-VfOP9f8mmotAdfpuVXETbJBWWoZ6J13t6EoJhCeJV9MCjflxGq11spIJEFcB3rGu-IPrIEKL-SvP7qiyEQG_bByhRX0dtW1Q"
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Charlie Davis
                      </span>{" "}
                      dans{" "}
                      <span className="text-green-500 dark:text-green-400">
                        Front-end
                      </span>
                    </p>
                    <a className="text-slate-900 dark:text-white font-semibold hover:text-primary cursor-pointer text-lg">
                      Démarrer avec les Hooks React
                    </a>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Un guide pour débutants pour comprendre et utiliser les
                      Hooks React.
                    </p>
                  </div>
                  <div className="text-center text-sm text-slate-500 dark:text-slate-400 w-20 shrink-0 ml-auto">
                    <p className="font-bold text-lg text-slate-700 dark:text-slate-300">
                      8
                    </p>
                    <p>Messages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-slate-200 dark:border-gray-700">
                  <img
                    alt="User Avatar"
                    className="size-8 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKQEx6TOc6UeEZhS7PyXvTmhKhZhSuNn4I4dcSCGRatnYnH3QLm9vUW3q3IaX8k8tQtEJzCJbVkSG9W2mW-rcqB7cCUIgieT7wVauOeE9n9kJR_wyi_NiZ-50sihTeoMaDEvuEr3jI65DmasA1Jf3V-ZPAzakGKJg9Y760GPGgpPDhKv7m8JTqVc5hO6W5RRKlQoG0GpZZdEmsbPqGVI_akiqTGM3Ic53oquoN0UjL0_feDR1-ZsubNOYrmMqmUUpUb5qIpOd41Eo"
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Dana Lee
                      </span>{" "}
                      dans{" "}
                      <span className="text-purple-500 dark:text-purple-400">
                        UI/UX Design
                      </span>
                    </p>
                    <a className="text-slate-900 dark:text-white font-semibold hover:text-primary cursor-pointer text-lg">
                      Conseils pour créer un portfolio époustouflant
                    </a>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Comment présenter efficacement votre travail pour
                      décrocher l'emploi de vos rêves.
                    </p>
                  </div>
                  <div className="text-center text-sm text-slate-500 dark:text-slate-400 w-20 shrink-0 ml-auto">
                    <p className="font-bold text-lg text-slate-700 dark:text-slate-300">
                      19
                    </p>
                    <p>Messages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-gray-700 relative p-6 pattern-uiux">
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                <Bell className="text-yellow-500 dark:text-yellow-400 w-5 h-5" />
                Vos notifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    alt="User Avatar"
                    className="size-8 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTUSIfMT4q7PJXLbOhvTkL1ofyb84a179gJyk9lumVHxL_ZxuQvFNmW7ICUpQ0pyR4-PtgjK_HKqKmKP5IoeMvoKaF9RJ5WxQyeqiFWdSiS0L6hRBOV42mxbFWbVP_lNe_5PQ8nFDWI5oPwy0QaJW8Y-RqKO-gviTE6rSMRjQy1B9AnnS7s8Q1k1rHcesKzogfHHpc4tLMfs9EGXFLRCRax0EWshO5C_CSinBqeaanFOXQWnZi5lx0q1Lv1sNrXAI4XSMICDAEyyo"
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Vous
                      </span>{" "}
                      avez une nouvelle réponse dans{" "}
                      <span className="text-primary">GraphQL vs. REST</span>
                    </p>
                    <a className="text-slate-900 dark:text-white font-semibold hover:text-primary cursor-pointer text-lg">
                      « Et pour les cas d'utilisation en temps réel ? »
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Il y a 2 heures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-slate-200 dark:border-gray-700">
                  <img
                    alt="User Avatar"
                    className="size-8 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe7tIFNrWF_4JSzflK98euBq_4EVMbBMz_VV9gTCKaCHBvYZ2D7JqGM2l3avc2cWxl3t6aCer6-IyRNKEVRtdPSqRVhHNBovaGJANUTPkB7JjVeN_iGgzTFbcaVf8d6cBD-6bNxxPeW_udKWcFlqi-AW5cu6Az4vw8Zi3bYM_0ydsPMbPOWmgdwCybQtVN6cjTnpPTDtaWi1i-xchFc7ehL4QFvedcYazPF8OB1sibaHRqMNZeJ40z3fYXEHkHYATFpC2aQlWQaio"
                  />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Sarah M.
                      </span>{" "}
                      vous a mentionné dans{" "}
                      <span className="text-green-500 dark:text-green-400">
                        Gestion d'état dans Vue 3
                      </span>
                    </p>
                    <a className="text-slate-900 dark:text-white font-semibold hover:text-primary cursor-pointer text-lg">
                      « @VotreNom, ton point de vue sur Pinia est vraiment
                      pertinent ! »
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Hier
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
