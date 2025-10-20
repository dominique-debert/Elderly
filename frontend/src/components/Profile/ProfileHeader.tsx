import { useAuthStore } from "@/stores";
import { Card, CardHeader } from "@/components";
import { formatMonthYear } from "@/utils";
import { Navigate, useNavigate } from "react-router-dom";

export function ProfileHeader() {
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Card className="w-full p-6 border-0">
      <CardHeader className="w-full flex flex-col items-center border-0">
        <figure>
          <img
            src={user?.avatarUrl || "/default-avatar.png"}
            alt="User Avatar"
            className="w-[200px] h-[200px] rounded-full mx-auto mb-4 border-[3px] border-slate-600 object-cover"
          />
        </figure>
        <span className="w-full text-2xl font-bold text-center text-slate-200">
          {user?.firstName} {user?.lastName}
        </span>
        <span className="w-full text-base text-center text-slate-500">
          {user?.profession} | {user?.city}, France
        </span>
        <span className="w-full text-base text-center text-slate-500">
          Pas de connexions
        </span>
        <span className="w-full text-base text-center text-slate-200">
          Membre depuis&nbsp;
          {user?.registrationDate
            ? formatMonthYear(user?.registrationDate)
            : ""}
        </span>
        <button
          onClick={() => navigate("/edit-profile")}
          className="btn btn-primary h-9 mt-4 px-2 py-4 w-36"
        >
          Modifier le profil
        </button>
      </CardHeader>
    </Card>
  );
}
