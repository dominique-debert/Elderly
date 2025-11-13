import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { PageBreadcrumbs } from "@/components/ui/PageBreadcrumbs";

export function AdminUsersPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col">
      {user && user.isAdmin ? (
        <>
          <div className="p-4 w-full dark:bg-transparent bg-(--root-bg)">
            <PageBreadcrumbs
              items={[
                { label: "Accueil", path: "/" },
                { label: "Administration", path: "/admin" },
                { label: "Gestion des utilisateurs" },
              ]}
            />
            <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 -mb-4">
              Administration - Gestion des utilisateurs
            </h2>
            <div className="divider expert-blue mb-0"></div>
          </div>
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
}
