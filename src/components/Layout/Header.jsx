import React, { useState } from "react";
import Nav from "./Nav";
import { Grip } from "lucide-react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="h-15">
      <div className="fixed flex justify-between items-center w-full left-0 right-0 top-0  px-5 py-3 lg:max-w-7xl lg:mx-auto ">
        <span>
          <a href="">Logo</a>
        </span>

        <Nav toggle={openNav} />

        <span
          className="cursor-pointer lg:hidden "
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          <Grip color="#9f9393" />
        </span>
      </div>
    </header>
  );
};

export default Header;
