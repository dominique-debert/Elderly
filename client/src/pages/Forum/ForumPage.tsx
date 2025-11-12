import { Navigate } from "react-router-dom";
import {
  Pin,
  MessageSquare,
  Users,
  FileText,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  X,
} from "lucide-react";
import { useAuthStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { getAllForumTopics, getForumStatistics } from "@/services";
import { IForumTopic } from "@/types";
import { useState } from "react";

export function ForumPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(20);

  const {
    data: forumTopicsResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["forumTopics", currentPage, limit],
    queryFn: () => getAllForumTopics(currentPage, limit),
  });

  const { data: statistics, isLoading: isLoadingStats } = useQuery({
    queryKey: ["forumStatistics"],
    queryFn: getForumStatistics,
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return (
      <div className="mt-4 mr-3 gap-6 flex flex-col">
        <p className="text-slate-600 dark:text-slate-400">Chargement...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-4 mr-3 gap-6 flex flex-col">
        <p className="text-red-600 dark:text-red-400">
          Une erreur s'est produite lors du chargement des topics.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 mr-3 gap-6 flex flex-col">
      <div className="flex flex-col bg-transparent! border-0 w-full">
        <span className="text-xl w-full lg:text-3xl font-medium text-slate-800 dark:text-slate-300">
          Bienvenue sur le forum, {user?.firstName}.
        </span>

        {/* Statistics Cards */}
        {!isLoadingStats && statistics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Total Discussions (Messages) */}
            <div className="bg-white dark:bg-card p-4 rounded-lg border border-slate-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Discussions
                  </p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {statistics.totalMessages.toLocaleString()}
                  </p>
                </div>
                <div className="p-2.5 bg-primary/10 rounded-full">
                  <MessageSquare className="size-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Active Participants */}
            <div className="bg-white dark:bg-card p-4 rounded-lg border border-slate-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Participants actifs
                  </p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {statistics.activeParticipants.toLocaleString()}
                  </p>
                </div>
                <div className="p-2.5 bg-green-500/10 rounded-full">
                  <Users className="size-4 text-green-500" />
                </div>
              </div>
            </div>

            {/* Total Threads */}
            <div className="bg-white dark:bg-card p-4 rounded-lg border border-slate-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Sujets
                  </p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {statistics.totalThreads.toLocaleString()}
                  </p>
                </div>
                <div className="p-2.5 bg-blue-500/10 rounded-full">
                  <FileText className="size-4 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Field and Page Size Selector */}
        <div className="mt-6 flex gap-3 items-center">
          {/* Search Field */}
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="size-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher un sujet..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
              className="rounded-3xl w-full pl-10 pr-10 py-2.5 text-sm border border-slate-200 dark:border-gray-700  bg-white dark:bg-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
            <button
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              disabled={!searchQuery}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-slate-400"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Page Size Selector */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="pageSize"
              className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap"
            >
              Afficher
            </label>
            <div className="relative">
              <select
                id="pageSize"
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="rounded-3xl pl-3 pr-8 py-2.5 text-sm border border-slate-200 dark:border-gray-700 bg-white dark:bg-card text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors cursor-pointer appearance-none"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mt-6 gap-4 flex flex-col mb-6">
          {forumTopicsResponse && forumTopicsResponse.data.length > 0 ? (
            <>
              {(() => {
                const filteredTopics = forumTopicsResponse.data.filter(
                  (forumTopic: IForumTopic) =>
                    searchQuery
                      ? forumTopic.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                        forumTopic.user?.firstName
                          ?.toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                        forumTopic.user?.lastName
                          ?.toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      : true
                );

                if (filteredTopics.length === 0) {
                  return (
                    <p className="text-slate-600 dark:text-slate-400">
                      Aucun sujet ne correspond à votre recherche.
                    </p>
                  );
                }

                return filteredTopics.map((forumTopic: IForumTopic) => (
                  <div
                    key={forumTopic.id}
                    className="bg-white dark:bg-card rounded-lg border border-slate-200 dark:border-gray-700 p-3.5 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="flex items-start gap-2 flex-1">
                        {forumTopic.pinned && (
                          <Pin className="size-4 text-primary mt-1 shrink-0" />
                        )}
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {forumTopic.title}
                        </h3>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary ml-2 shrink-0">
                        {forumTopic.createdAt
                          ? new Date(forumTopic.createdAt).toLocaleDateString(
                              "fr-FR"
                            )
                          : ""}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Par {forumTopic.user?.firstName}{" "}
                        {forumTopic.user?.lastName}
                      </p>
                      {forumTopic._count?.forumMessage !== undefined &&
                        forumTopic._count.forumMessage > 0 && (
                          <p className="mr-1 text-xs text-slate-500 dark:text-slate-400">
                            {forumTopic._count.forumMessage} message
                            {forumTopic._count.forumMessage > 1 ? "s" : ""}
                          </p>
                        )}
                    </div>
                  </div>
                ));
              })()}

              {/* Pagination */}
              {!searchQuery &&
                forumTopicsResponse.pagination.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="p-1.5 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-card hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="size-4" />
                    </button>

                    {Array.from(
                      { length: forumTopicsResponse.pagination.totalPages },
                      (_, i) => i + 1
                    ).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-2.5 py-1.5 text-xs rounded-full border transition-colors ${
                          currentPage === page
                            ? "bg-primary text-white border-primary"
                            : "border-slate-200 dark:border-gray-700 bg-white dark:bg-card hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(
                            prev + 1,
                            forumTopicsResponse.pagination.totalPages
                          )
                        )
                      }
                      disabled={
                        currentPage ===
                        forumTopicsResponse.pagination.totalPages
                      }
                      className="p-1.5 rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-card hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                )}
            </>
          ) : (
            <p className="text-slate-600 dark:text-slate-400">
              Aucun topic disponible pour le moment.
            </p>
          )}
        </div>
      </div>

      {/* <div className="flex flex-col gap-6 bg-transparent! border-0 w-full">
          <span className="text-2xl w-full lg:text-3xl font-medium text-slate-900 dark:text-slate-300">
            Bienvenue sur le forum, {user?.firstName}.
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
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-3xl h-10 btn-primary text-sm font-bold leading-normal tracking-[0.015em] gap-3">
            <Plus className="size-4" />
            <span className="truncate">Démarrer une nouvelle discussion</span>
          </button>
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
        </div> */}
    </div>
  );
}
