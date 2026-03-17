import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Navbar, LeftSidebar } from "@/components";
import { SidebarContext } from "@/context/SidebarContext";

export function Layout() {
  const { isAuthenticated } = useAuthStore();
  const { collapsed } = useContext(SidebarContext);

  return (
    <div className="h-screen flex flex-col">
      {isAuthenticated && <Navbar />}

      <div className="flex flex-1 relative h-auto justify-center">
        {isAuthenticated && <LeftSidebar />}
        <main
          className={`transition-all duration-150 w-full h-auto mr-4 md:ml-0 pt-16 ${
            isAuthenticated ? (collapsed ? "md:ml-30" : "md:ml-71 sm:ml-4") : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
