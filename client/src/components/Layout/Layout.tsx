import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Navbar, LeftSidebar } from "@/components";

export function Layout() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="h-full mb-4 w-full mr-4 overflow-hidden overflow-y-auto hide-scrollbar">
      {isAuthenticated && <Navbar />}

      <div
        className="flex w-full overflow-hidden"
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
