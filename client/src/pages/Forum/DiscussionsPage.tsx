import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import {
  Plus,
  ChevronsUpDown,
  ChevronsDownUp,
  CheckCheck,
  MessagesSquare,
  ChevronDown,
  MessageCircleQuestion,
  Lightbulb,
  Code,
  PartyPopper,
  ChevronUp,
} from "lucide-react";

export function DiscussionsPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Redesign the discussions page: THIS IS A DUMMY PAGE FOR NOW */}
      <div className="mr-3 mt-20 gap-6 flex flex-col">
        <div className="flex flex-col gap-6 bg-transparent! border-0 w-full">
          <div className="flex flex-wrap justify-between items-center gap-4 p-4 mb-8">
            <div className="flex flex-col gap-2">
              <p className="text-slate-900 dark:text-slate-300 text-3xl font-bold leading-tight tracking-[-0.033em]">
                Bienvenue sur le forum
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                Suivez les dernières discussions sur tous les sujets.
              </p>
            </div>
            <button className="flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <Plus className="size-4" />
              <span className="truncate">Nouvelle discussion</span>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-4 px-4">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-9 px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium leading-normal transition-colors">
                  <ChevronsUpDown className="size-4" />
                  <span className="truncate">Développer tous les sujets</span>
                </button>
                <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-9 px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium leading-normal transition-colors">
                  <ChevronsDownUp className="size-4" />
                  <span className="truncate">Réduire tous les sujets</span>
                </button>
              </div>
              <button className="flex items-center justify-center gap-2 overflow-hidden rounded-lg h-9 px-4 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium leading-normal transition-colors">
                <CheckCheck className="size-4" />
                <span className="truncate">Marquer tout comme lu</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl">
                <button className="flex items-center gap-4 p-4 border border-transparent hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group rounded-xl">
                  <div className="flex items-center justify-center rounded-full bg-blue-500 shrink-0 size-10 text-white group-hover:bg-primary transition-colors">
                    <MessagesSquare className="size-5" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-1 text-left">
                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">
                      Discussion générale
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                      Un espace pour discuter de tout et de rien.
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <ChevronDown className="size-4 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                </button>
                <div className="pt-2 px-4 pb-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Discussions récentes
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Développer</span>
                      </button>
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Réduire</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClziVNs56MztLyVuWY4cWSrQhYbcx8kvYwT4LYoIuLrE1gZAr-FDU9PcvNhTid1NtXbR6BlWlYQW8E3OxWDUOvdbQGzB-yLAnrjjfRL2UFwcag1vSvRHlvDT-2PBOYfOJcAJh-SWH7XExAbyXbDD1-vbzPLHofkzj15OErtj3qZBahuzMTv5Z0qt6ZOV5rN2UAd3RjzW-EsEOP3ml8KqYPjTTB3YXuKM6z_fBHYx1_fNQJtuKXfvgs6aKF_YQ41dFGFYwzFWtxDiw")',
                        }}
                      ></div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">
                          Films préférés de 2024 ?
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">
                          par{" "}
                          <span className="font-semibold text-primary/80">
                            alexj
                          </span>
                          , il y a 2 heures
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkMspeIws2G6Nfl9JrqaGVw63-0m2xIM1JVBioHzFKEYoKLrCSBCD0ndlYBhlKJ9vJdoqqObVMzd-h5GSE-pJWJBDqPO3juj4Te1N6oIwfcwtgdaB-WUxMDqsgIIX0zXrVQTcp5Dh72bLiaNLzCZ5OJp5FuBSBFBZwt64nrOMuSJpTbxmOauJUKQvT-eLo_PUSuzG9QWNxfgnO3LwJc2QNB0MHopiG3PK-Ps-XNNJSZPIbz8KQBFzj_eLRSMpZBbdj0hhvxKi66uc")',
                        }}
                      ></div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">
                          Meilleures astuces de productivité ?
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">
                          par{" "}
                          <span className="font-semibold text-primary/80">
                            prod_guru
                          </span>
                          , il y a 5 heures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl">
                <button className="flex items-center gap-4 p-4 border border-transparent hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group rounded-xl">
                  <div className="flex items-center justify-center rounded-full bg-green-500 shrink-0 size-10 text-white group-hover:bg-primary transition-colors">
                    <MessageCircleQuestion className="size-4" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-slate-900 text-left dark:text-white text-base font-semibold leading-normal">
                      Aide &amp; Support
                    </p>
                    <p className="text-slate-500 text-left dark:text-slate-400 text-sm font-normal leading-normal">
                      Obtenez de l'aide avec notre produit ou demandez de
                      l'assistance.
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
                      <ChevronDown className="size-4" />
                    </span>
                  </div>
                </button>
                <div className="pt-2 px-4 pb-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Discussions récentes
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Développer</span>
                      </button>
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Réduire</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkMspeIws2G6Nfl9JrqaGVw63-0m2xIM1JVBioHzFKEYoKLrCSBCD0ndlYBhlKJ9vJdoqqObVMzd-h5GSE-pJWJBDqPO3juj4Te1N6oIwfcwtgdaB-WUxMDqsgIIX0zXrVQTcp5Dh72bLiaNLzCZ5OJp5FuBSBFBZwt64nrOMuSJpTbxmOauJUKQvT-eLo_PUSuzG9QWNxfgnO3LwJc2QNB0MHopiG3PK-Ps-XNNJSZPIbz8KQBFzj_eLRSMpZBbdj0hhvxKi66uc")',
                        }}
                      ></div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">
                          Problème de connexion sur l'application mobile
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">
                          par{" "}
                          <span className="font-semibold text-primary/80">
                            marias
                          </span>
                          , il y a 5 heures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl">
                <button className="flex items-center gap-4 p-4 border border-transparent hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group rounded-xl">
                  <div className="flex items-center justify-center rounded-full bg-yellow-500 shrink-0 size-10 text-white group-hover:bg-primary transition-colors">
                    <Lightbulb className="size-5" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-1">
                    <p className="text-slate-900 text-left dark:text-white text-base font-semibold leading-normal">
                      Idées &amp; Retours
                    </p>
                    <p className="text-slate-500 text-left dark:text-slate-400 text-sm font-normal leading-normal">
                      Partagez vos idées pour de nouvelles fonctionnalités et
                      vos retours.
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <ChevronDown className="size-4 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                </button>
                <div className="pt-2 px-4 pb-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Discussions récentes
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Développer</span>
                      </button>
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Réduire</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkMspeIws2G6Nfl9JrqaGVw63-0m2xIM1JVBioHzFKEYoKLrCSBCD0ndlYBhlKJ9vJdoqqObVMzd-h5GSE-pJWJBDqPO3juj4Te1N6oIwfcwtgdaB-WUxMDqsgIIX0zXrVQTcp5Dh72bLiaNLzCZ5OJp5FuBSBFBZwt64nrOMuSJpTbxmOauJUKQvT-eLo_PUSuzG9QWNxfgnO3LwJc2QNB0MHopiG3PK-Ps-XNNJSZPIbz8KQBFzj_eLRSMpZBbdj0hhvxKi66uc")',
                        }}
                      ></div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">
                          Suggestion : Basculer en mode sombre
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">
                          par{" "}
                          <span className="font-semibold text-primary/80">
                            devdave
                          </span>
                          , il y a 1 jour
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl">
                <button className="flex items-center gap-4 p-4 border border-transparent hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group rounded-xl">
                  <div className="flex items-center justify-center rounded-full bg-purple-500 shrink-0 size-10 text-white group-hover:bg-primary transition-colors">
                    <Code className="size-5" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-1 text-left">
                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">
                      Coin des développeurs
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                      Discutez des API, des intégrations et de tout ce qui
                      concerne le code.
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <ChevronUp className="size-4 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                </button>
                <div className="pt-2 px-4 pb-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Discussions récentes
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Développer</span>
                      </button>
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Réduire</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkMspeIws2G6Nfl9JrqaGVw63-0m2xIM1JVBioHzFKEYoKLrCSBCD0ndlYBhlKJ9vJdoqqObVMzd-h5GSE-pJWJBDqPO3juj4Te1N6oIwfcwtgdaB-WUxMDqsgIIX0zXrVQTcp5Dh72bLiaNLzCZ5OJp5FuBSBFBZwt64nrOMuSJpTbxmOauJUKQvT-eLo_PUSuzG9QWNxfgnO3LwJc2QNB0MHopiG3PK-Ps-XNNJSZPIbz8KQBFzj_eLRSMpZBbdj0hhvxKi66uc")',
                        }}
                      ></div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">
                          Notes de version de l'API v2
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">
                          par{" "}
                          <span className="font-semibold text-primary/80">
                            staff_eng
                          </span>
                          , il y a 3 jours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl">
                <button className="flex items-center gap-4 p-4 border border-transparent hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group rounded-xl">
                  <div className="flex items-center justify-center rounded-full bg-red-500 shrink-0 size-10 text-white group-hover:bg-primary transition-colors">
                    <PartyPopper className="size-5" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-1">
                    <p className="text-slate-900 text-left dark:text-white text-base font-semibold leading-normal">
                      Annonces
                    </p>
                    <p className="text-slate-500 text-left dark:text-slate-400 text-sm font-normal leading-normal">
                      Actualités officielles et mises à jour de l'équipe.
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
                      <ChevronDown className="size-4" />
                    </span>
                  </div>
                </button>
                <div className="pt-2 px-4 pb-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      Discussions récentes
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Développer</span>
                      </button>
                      <button className="flex items-center justify-center gap-1 overflow-hidden rounded-md h-7 px-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium leading-normal transition-colors">
                        <span className="truncate">Réduire</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 group">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkMspeIws2G6Nfl9JrqaGVw63-0m2xIM1JVBioHzFKEYoKLrCSBCD0ndlYBhlKJ9vJdoqqObVMzd-h5GSE-pJWJBDqPO3juj4Te1N6oIwfcwtgdaB-WUxMDqsgIIX0zXrVQTcp5Dh72bLiaNLzCZ5OJp5FuBSBFBZwt64nrOMuSJpTbxmOauJUKQvT-eLo_PUSuzG9QWNxfgnO3LwJc2QNB0MHopiG3PK-Ps-XNNJSZPIbz8KQBFzj_eLRSMpZBbdj0hhvxKi66uc")',
                        }}
                      ></div>
                      <div className="flex flex-1 flex-col">
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">
                          Mise à jour des règles de la communauté
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">
                          par{" "}
                          <span className="font-semibold text-primary/80">
                            admin
                          </span>
                          , il y a 1 semaine
                        </p>
                      </div>
                    </div>
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
