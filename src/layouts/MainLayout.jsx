import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

import { useState } from "react";
import Sidebar from "../components/sidebar/SideBar";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="min-h-screen flex" onClick={() => setIsMenuOpen(false)}>
        <Sidebar />
        <div className="w-full relative">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
