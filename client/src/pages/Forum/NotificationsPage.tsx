import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import {
  Reply,
  AtSign,
  MessageSquareText,
  MessageSquarePlus,
  Bookmark,
  Search,
  ListFilter,
  ChevronDown,
  History,
} from "lucide-react";

export function NotificationsPage() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO : Refaire la page des notifications — PAGE FACTICE POUR L'INSTANT */}
      <div className="mt-20 w-full flex gap-6">
        <main className="flex flex-col w-full h-screen mr-4">
          <header className="w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-3xl font-medium leading-tight tracking-[-0.033em] dark:text-slate-300">
                  Mes Notifications
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">
                  Restez à jour avec votre activité récente sur le forum.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="btn btn-primary btn-sm">
                  <span>Marquer tout comme lu</span>
                </button>
                <button className="btn btn-danger btn-sm">
                  <span>Tout effacer</span>
                </button>
              </div>
            </div>
          </header>
          <div className="flex-1 mt-6">
            <div className="space-y-4 pb-4 border-b border-slate-200 dark:border-slate-800 mb-2">
              <div className="relative">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                <input
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Rechercher dans l'activité..."
                  type="text"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Filtrer par&nbsp;:
                  </span>
                  <div className="flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
                    <p className="text-primary text-sm font-medium">
                      Toutes les activités
                    </p>
                  </div>
                  <div className="flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-4 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      Non lus
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <button className="flex h-9 items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                    <ListFilter className="size-4" />
                    <span>Catégorie&nbsp;: Toutes</span>
                    <ChevronDown className="size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 sticky top-[104px] z-5 bg-background-light dark:bg-background-dark py-2">
                  Aujourd'hui
                </h2>
                <div className="space-y-4">
                  <div className="group flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c2c] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"></div>
                    <div className="shrink-0 relative">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Avatar de l'utilisateur Jane Doe"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1HR99plUGHm9tV5iZTux4hgC05ayNRnAGUjI9S5TmGAMcc2kyR8cNHukOLl9krVhXFCUFg1lqBynPLfo_XDvPlef5nEvCkgcNJJ9ooXY_rcLU2lW32gPLT__H2Z08W58oTWHt0LG95QQz0Vd8td6Q-SZTTRCHtuQPcdfedZoJpIZfBUIGmRcnWw-jvGiEGrBXWDkmbxpJSVT_gV3skBmXxFW1UPc11AfIN4F4KTDEkBw0T5gyVBc9WvZBxfxH_8bKDeGnerH4Bsw")',
                        }}
                      ></div>
                      <button className="absolute bottom-1 right-1.5 flex items-center justify-center bg-blue-500 text-white rounded-full p-1.5">
                        <Reply className="size-4" />
                      </button>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 dark:text-slate-200 text-sm leading-snug">
                        <strong className="font-semibold">Jane Doe</strong> a
                        répondu à votre commentaire dans la discussion{" "}
                        <strong className="font-semibold text-primary">
                          Présentations
                        </strong>
                        .
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                        Il y a 5 minutes
                      </p>
                      <div className="mt-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                          « Bienvenue dans la communauté ! Heureux de vous avoir
                          parmi nous. »
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center justify-center h-9 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                          <span>Voir la réponse</span>
                        </button>
                        <button className="flex items-center justify-center h-9 px-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                          <span>Répondre</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c2c] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="shrink-0 relative">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Avatar de l'utilisateur John Smith"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVrlfNFI0CCYmaUGUOrwTP5W9sGKpUZbGtTerQR3B46B49ufr_WE1MJrkBY49blm58p2yByoQ13V-q-qkNklDYZFCw4Mw16wi2VGr5WrHuV5ByNA3a-N1V138L-5zD2G7_C8DpKhzmWQBCRsNi9aRKBQSj6Xh5c_N9j2Az8N105wQHEWeagz3pufRMyW7abZevj_2vY8h5bfPKnppyYNIjE4e5netVfyOHyCVH6A1Al5L1M5R-wQDqXD7EeCrFJ_sRFfulJm29m9s")',
                        }}
                      ></div>
                      <span className="absolute bottom-1 right-1.5 flex items-center justify-center bg-purple-500 text-white rounded-full p-1.5">
                        <AtSign className="size-4" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 dark:text-slate-200 text-sm leading-snug">
                        <strong className="font-semibold">John Smith</strong>{" "}
                        vous a mentionné dans la discussion{" "}
                        <strong className="font-semibold text-primary">
                          Bonnes pratiques UI/UX
                        </strong>
                        .
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                        Il y a 2 heures
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center justify-center h-9 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                          <span>Voir la mention</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c2c] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="shrink-0 relative">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Avatar de l'utilisateur Sarah Lee"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGEoETnxKfRm3Nh0KVlD5UQz_AGWSOFlDghtjDuvTqTpUO44TXt7hlNU5Km_DvdiQUU0B37oiRa_mSNM7CwEHFQWu4aSDgfOONLuMOwZfhd-nach7GR0j7GnuegLzALHSJeteulqRgpLHQDyfYYi4HtnjTyJXcgzqrFU1SGvTFANnpDT4M-97WXPlggpoUxzw5I5YcjQu5bMvY8K9JGkJUJ9pJmAYacYfu9ER6Poai7CZPW-no0GUaT89QE6VfzbCSbtYhOMKenlo");',
                        }}
                      ></div>
                      <span className="absolute bottom-1 right-1.5 flex items-center justify-center bg-green-500 text-white rounded-full p-1.5">
                        <MessageSquareText className="size-4" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 dark:text-slate-200 text-sm leading-snug">
                        <strong className="font-semibold">Sarah Lee</strong>{" "}
                        vous a envoyé un nouveau message privé.
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                        Il y a 3 heures
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center justify-center h-9 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                          <span>Voir le message</span>
                        </button>
                        <button className="flex items-center justify-center h-9 px-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                          <span>Répondre</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 sticky top-[104px] z-5 bg-background-light dark:bg-background-dark py-2">
                  Hier
                </h2>
                <div className="space-y-4">
                  <div className="group flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c2c] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="shrink-0 relative">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Avatar utilisateur par défaut"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlnoYo6fjEYrzx4dRehgw59btRfCeffgrobGRSWF0fG0-oFktNSdBkb3z1t495xfVKaA5ToXzCpgMr6IKHzp18adHepg_f_pq3xyiqMhCyo3PA_bwrb1eiAiSn27lzJn-Ib1P-HZtWjrHUyT740AyvG3wTLWuR14XCT9y01PdTj25sQpafpcwt1izhryJs0ARgKbn5uVWCcr6WVhY0Hhis4zJzGUuC8-3lqtGlG8kvOluaaiNeZFGliCZR36476PZtKqI1vJnCbbU");',
                        }}
                      ></div>
                      <span className="absolute bottom-1 right-1.5 flex items-center justify-center bg-orange-500 text-white rounded-full p-1.5">
                        <Bookmark className="size-4" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 dark:text-slate-200 text-sm leading-snug">
                        Vous avez commencé à suivre le sujet{" "}
                        <strong className="font-semibold text-primary">
                          Discussion sur les nouvelles fonctionnalités
                        </strong>
                        . Nous vous tiendrons informé&nbsp;!
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                        Il y a 1 jour
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center justify-center h-9 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                          <span>Voir le sujet</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="group flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151c2c] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="shrink-0 relative">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="Avatar de l'utilisateur Alex Johnson"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCC3O9qFwLspLR5vVRreaIdtNudNsj_MvioTnnbB5xFpnupP1kumoAa8kDvKslgAvD0LqxsQiuIZ3tzD5CHKLBtKV-ANjWIJtXnVf0qoijLHooLzyrFJbgf55hz9ynQyxXSdsDr-lJSA8KMaV7wDS9XOfKoMZZj9hYAJ8QPEyZ3mS43xFxrBUbzUu0oRqoMNx-WmHNxGyxBOuvZuZrUYqKJSzIjumQfBF8prxGEK4_nJ_gM8wpOF2IfOBsZ8RusTTosznyM-aAEZbE");',
                        }}
                      ></div>
                      <span className="absolute bottom-1 right-1.5 flex items-center justify-center bg-red-500 text-white rounded-full p-1.5">
                        <MessageSquarePlus className="size-4" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800 dark:text-slate-200 text-sm leading-snug">
                        <strong className="font-semibold">Alex Johnson</strong>{" "}
                        a créé un nouveau post dans{" "}
                        <strong className="font-semibold text-primary">
                          Discussion générale
                        </strong>
                        : « Nouvelles mises à jour enthousiasmantes ! »
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                        Il y a 1 jour
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <button className="flex items-center justify-center h-9 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                          <span>Voir le post</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="inline-flex items-center justify-center h-10 px-6 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                <span>Charger les activités précédentes</span>
                <History className="ml-2 size-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
