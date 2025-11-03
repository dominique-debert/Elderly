import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Card } from "@/components";

export function DiscussionsPage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* TODO: Redesign the discussions page: THIS IS A DUMMY PAGE FOR NOW */}
      <div className="mr-4 mt-20 min-h-[calc(100vh-4rem)] flex gap-6 overflow-hidden">
        <div className="w-full">
          <div className="dark:bg-[#060e21] bg-(--root-bg) w-[calc(100vw-21rem)]">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-400">
              Bienvenue sur les discussions, {user?.firstName}!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
