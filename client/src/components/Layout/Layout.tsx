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

      <div className="flex flex-1 relative h-auto overflow-hidden">
        {isAuthenticated && <LeftSidebar />}
        <main
          className={`transition-all duration-150 w-full h-auto overflow-x-hidden lg:mt-16 mt-2 ${
            isAuthenticated ? (collapsed ? "md:ml-28" : "md:ml-68") : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
