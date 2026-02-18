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

      <div className="flex flex-1 relative h-auto overflow-hidden justify-center">
        {/* <div className="absolute inset-0 -z-5">
          <img
            src="/images/landing-illustration.jpg"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div> */}
        {isAuthenticated && <LeftSidebar />}
        <main
          className={`transition-all scrollbar-hide duration-150 w-full h-auto overflow-x-hidden overflow-y-auto mr-4 md:ml-0 pt-16 ${
            isAuthenticated ? (collapsed ? "md:ml-30" : "md:ml-70") : ""
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
