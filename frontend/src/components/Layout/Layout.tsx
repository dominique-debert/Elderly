import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Navbar, LeftSidebar } from "@/components";

export function Layout() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto hide-scrollbar">
      {isAuthenticated && <Navbar />}

      <div
        className="flex h-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {isAuthenticated && <LeftSidebar />}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
