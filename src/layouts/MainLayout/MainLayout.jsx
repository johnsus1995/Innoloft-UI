import Navbar from "src/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      MainLayout
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
