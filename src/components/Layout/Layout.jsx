import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <BrowserRouter>
        <Main />
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default Layout;
