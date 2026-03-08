import React from "react";
import Profile from "../assets/images/Profile.png";
import { data } from "../data/techStack";
import TechCard from "../components/cards/techCard";
import HeroImage from "../assets/images/hero.png";
import Button from "../components/buttons/button";
import { icons } from "../components/icons/techStack";

const Home = () => {
  const JsIcon = icons.javascript;
  return (
    <section id="home" className="h-screen  ">
      <div className="flex flex-col mx-auto  max-w-120 md:max-w-140 lg:flex-row lg:max-w-7xl   ">
        <div className="flex-1 flex flex-col gap-2 p-5 lg:justify-center">
          <b className="text-4xl text-[#7AAACE] font-Poppins lg:text-7xl">
            Aspiring Web Developer
          </b>
          <p className="font-Inter">
            I create web experiences and learn new technologies to build
            creative solutions. Every project is a step forward.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#7AAACE] px-4 py-2 text-[#F7F8F0] rounded-md">
              Download CV
            </button>
            <button className="border border-[#7AAACE] px-4 py-2 rounded-md text-[#7AAACE]">
              Send Emai
            </button>
          </div>
        </div>
        <div className="flex-1  -z-1 relative">
          <img src={icons.css} alt="" className="absolute max-w-20 " />

          <img
            src={icons.vscode}
            alt=""
            className="absolute max-w-20 right-5 -bottom-50 "
          />

          <img src={icons.html} alt="" className="absolute max-w-20 top-40 " />

          <img
            src={icons.javascript}
            alt=""
            className="absolute max-w-20 -bottom-15 right-18 "
          />
          <img src={HeroImage} alt="" className="max-w-70 absolute left-12 md:max-w-80 md:left-18" />
        </div>
      </div>
    </section>
  );
};

export default Home;
