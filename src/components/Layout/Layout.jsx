import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import About from "../../Sections/About";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />

       <div className="flex flex-col-reverse lg:flex-row  lg:max-h-220 ">

        <div className="flex-1 ">

         <About/>
          
       </div>

       <div className="flex-1 lg:overflow-x-hidden">
        <Main/>
       </div>

       </div>

     
    </div>
  );
};

export default Layout;
