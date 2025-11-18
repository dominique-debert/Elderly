import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { getAllForumSections } from "@/services";
import { IForumSection } from "@/types";
import { useState } from "react";
import { Plus, Search, X } from "lucide-react";
import { formatLongDate } from "@/utils";

export function ForumPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: forumSections,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["forumSections"],
    queryFn: () => getAllForumSections(),
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
          Une erreur s'est produite lors du chargement des sections.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 mr-3 gap-4 flex flex-col">
      <div className="flex bg-transparent! border-0 w-full">
        <span className="text-xl w-full lg:text-3xl font-medium text-slate-800 dark:text-slate-300">
          Bienvenue sur le forum, {user?.firstName}.
        </span>
        {isAuthenticated && user?.isAdmin && (
          <button className="btn btn-primary btn-sm mt-1.5">
            <Plus className="size-4" />
            Ajouter une section
          </button>
        )}
      </div>
      <div className="flex flex-col bg-transparent! border-0 w-full">
        {/* Search Field and Page Size Selector */}
        <div className="mt-4 flex gap-3 items-center">
          {/* Search Field */}
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="size-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher une section..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="rounded-3xl w-full pl-10 pr-10 py-2.5 text-sm border border-slate-200 dark:border-gray-700  bg-white dark:bg-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
            <button
              onClick={() => {
                setSearchQuery("");
              }}
              disabled={!searchQuery}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-slate-400"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 gap-4 flex flex-col mb-6">
          {forumSections && forumSections.length > 0 ? (
            <>
              {(() => {
                const filteredSections = forumSections?.filter(
                  (forumSection: IForumSection) =>
                    searchQuery
                      ? forumSection.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      : true
                );

                if (filteredSections.length === 0) {
                  return (
                    <p className="text-slate-600 dark:text-slate-400">
                      Aucun sujet ne correspond à votre recherche.
                    </p>
                  );
                }

                return filteredSections.map((forumSection: IForumSection) => (
                  <div
                    key={forumSection.id}
                    className="bg-white dark:bg-card rounded-lg border border-slate-200 dark:border-gray-700 p-3.5 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="flex items-start gap-2 flex-1">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {forumSection.name}
                        </h3>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary ml-2 shrink-0">
                        {forumSection._count?.forumTopics || 0} sujet
                        {(forumSection._count?.forumTopics || 0) > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {forumSection.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Créé par {forumSection.user?.firstName}{" "}
                        {forumSection.user?.lastName} le{" "}
                        {formatLongDate(forumSection.createdAt)}
                      </p>
                    </div>
                    {forumSection.lastPost && forumSection.lastPost.user && (
                      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-gray-700">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Dernier message le{" "}
                          {formatLongDate(forumSection.lastPost.createdAt)} par{" "}
                          {forumSection.lastPost.user.firstName}{" "}
                          {forumSection.lastPost.user.lastName}
                        </p>
                      </div>
                    )}
                  </div>
                ));
              })()}
            </>
          ) : (
            <p className="text-slate-600 dark:text-slate-400">
              Aucune section disponible pour le moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
