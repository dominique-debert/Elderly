import { Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="h-dvh w-full overflow-hidden bg-100">
      {isAuthenticated && <Navbar />}

      <div className="flex h-full">
        {" "}
        {/* 4rem = hauteur de la navbar */}
        {isAuthenticated && <Sidebar />}
        <main className="flex-1 overflow-y-auto no-scrollbar mt-16 ml-2 mr-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
