import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import { Navbar, LeftSidebar } from "@/components";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";

export function Layout() {
  const { isAuthenticated } = useAuthStore();
  const { collapsed } = useContext(SidebarContext);

  return (
    <div className="h-screen flex flex-col">
      {isAuthenticated && <Navbar />}

      <div className="flex flex-1 relative">
        {isAuthenticated && <LeftSidebar />}
        <main
          className={`transition-all duration-150 w-full ${
            isAuthenticated ? (collapsed ? "ml-28" : "ml-68") : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
