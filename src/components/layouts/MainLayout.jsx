import React from "react";
import ResponsiveNav from "../common/nav/responsiveNave/ResponsiveNav";
import Footer from "../common/footer/Footer";
import { Outlet } from "react-router-dom";
import LoginModal from "@/components/ui/LoginModal/LoginModal";
import RegisterModal from "@/components/ui/registerModal/RegisterModal";
import SearchModal from "@/components/ui/SearchModal/SearchModal";
import ThemePerformanceOptimizer from "../common/ThemePerformanceOptimizer";

export default function MainLayout() {
  return (
    <>
      <ThemePerformanceOptimizer />
      <ResponsiveNav />
      <LoginModal />
      <RegisterModal />
      <SearchModal />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
