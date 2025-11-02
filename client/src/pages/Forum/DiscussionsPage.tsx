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
      <div className="ml-62 mr-6 pt-14 min-h-[calc(100vh-4rem)] flex gap-6">
        <Card className="grow space-y-6 bg-transparent! border-0 p-10 pr-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-400 mb-4">
            Bienvenue sur les discussions, {user?.firstName}!
          </h1>
        </Card>
      </div>
    </>
  );
}
