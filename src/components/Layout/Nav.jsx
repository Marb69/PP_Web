import React from "react";
import Button from "../buttons/button";

const Nav = ({ toggle }) => {
  return (
    <nav
      className={`flex flex-col left-0 right-0 p-5 h-screen rounded-lg absolute top-10
  transition-all duration-300 ease-in-out
  ${toggle ? "opacity-100 translate-y-2 pointer-events-auto backdrop-blur-xs" : "opacity-0 translate-y-0 pointer-events-none"} flex flex-col items-center lg:static lg:h-auto lg:p-0 lg:opacity-100 lg:backdrop-blur-none lg:flex-row lg:pointer-events-auto lg:px-3 lg:py-2 lg:bg-gray-200 lg:gap-4 lg:rounded-4xl  `}
    >
      <ul className="text-[#7AAACE] font-medium flex flex-col gap-4 text-center bg-neutral-200 p-5 rounded-lg w-full md:w-140 lg:flex-row lg:bg-transparent lg:p-0  lg:sticky lg:w-auto lg:gap-8 lg:ml-3 ">
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0 lg:w-auto ">
          <a href="#home">Home</a>
        </li>
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0  lg:w-auto ">
          <a href="#about">Skill</a>
        </li>
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0  lg:w-auto">
          <a href="">Project</a>
        </li>
        <li className="bg-neutral-100 w-full px-5 py-3 rounded-md lg:bg-transparent lg:p-0  lg:w-auto">
          <a href="">About</a>
        </li>
      </ul>

      <Button
        className={
          "bg-[#7AAACE] text-[#EEE8E8] hover:bg-blue-400 transition-all ease-in-out duration-150 cursor-pointer mt-3 lg:mt-0 lg:rounded-4xl "
        }
        context={"contact Me"}
      />
    </nav>
  );
};

export default Nav;
