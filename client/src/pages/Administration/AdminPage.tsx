import { NavLink } from "react-router-dom";

import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { PageBreadcrumbs } from "@/components";

export function AdminPage() {
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
                { label: "Administration" },
              ]}
            />

            <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 -mb-4">
              Administration générale
            </h2>
            <div className="divider expert-blue mb-0"></div>
            <div className="flex mt-4 gap-4">
              <NavLink
                to="/admin/categories"
                className="btn btn-sm p-4 bg-primary/40 hover:bg-primary/70 font-normal"
              >
                Gestion des catégories
              </NavLink>
              <NavLink
                to="/admin/users"
                className="btn btn-sm p-4 bg-primary/40 hover:bg-primary/70 font-normal"
              >
                Gestion des utilisateurs
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <p>Vous n'avez pas les droits d'administrateurs.</p>
      )}
    </div>
  );
}
