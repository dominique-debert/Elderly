import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { ProfileHeader } from "@/components";
import { ProfileTabs } from "@/components";

export function ProfilePage() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {user ? (
        <div className="flex flex-col w-[calc(100vw-17rem)] justify-items-center align-items-center mt-20 ml-69 pr-6">
          <ProfileHeader />
          <ProfileTabs />
        </div>
      ) : (
        <p>Les informations de préférences sont introuvables.</p>
      )}
    </>
  );
}
