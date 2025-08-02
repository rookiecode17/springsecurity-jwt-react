import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <div className="flex flex-col min-h-screen bg-base-100">
         <Header />
      <main className="flex-grow">
        
        <Outlet />
        
      </main>
      <Footer />
        </div>
    </>
  );
};

export default Layout;