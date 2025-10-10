import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Navbar, LeftSidebar } from "@/components";

export function Layout() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="h-full w-full overflow-hidden">
      {isAuthenticated && <Navbar />}

      <div className="flex h-full">
        {/* 4rem = hauteur de la navbar */}
        {isAuthenticated && <LeftSidebar />}
        {/* <main className="flex-1 overflow-y-auto no-scrollbar mt-16 ml-2 mr-4"> */}
        <main className="flex-1 overflow-y-auto no-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
