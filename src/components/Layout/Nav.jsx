import React from "react";
import Button from "../buttons/button";

const Nav = ({ toggle }) => {
  return (
    <nav
      className={`flex flex-col left-0 right-0 p-5 h-screen rounded-lg absolute top-10
  transition-all duration-300 ease-in-out
  ${toggle ? "opacity-100 translate-y-2 pointer-events-auto backdrop-blur-xs" : "opacity-0 translate-y-0 pointer-events-none"} flex flex-col items-center lg:static lg:h-auto lg:p-0 lg:opacity-100 lg:backdrop-blur-none lg:flex-row lg:flex-1 lg:justify-center lg:pointer-events-auto `}
    >
      <ul className="font-medium flex flex-col gap-4 text-center bg-neutral-200 p-5 rounded-lg w-full md:w-140 lg:flex-row lg:bg-transparent lg:p-0 lg:mx-auto lg:sticky ">
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0 ">
          <a href="#home">Home</a>
        </li>
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0">
          <a href="#about">Skill</a>
        </li>
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0">
          <a href="">Project</a>
        </li>
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0">
          <a href="">About</a>
        </li>
      </ul>

      <Button
        className={
          "bg-blue-600 text-white hover:bg-blue-700 transition-all ease-in-out duration-150 cursor-pointer mt-3 lg:mt-0 "
        }
        context={"contact Me"}
      />
    </nav>
  );
};

export default Nav;
