import React from "react";
import Profile from "../assets/images/Profile.png";
import { data } from "../data/techStack";
import TechCard from "../components/cards/techCard";
import HeroImage from "../assets/images/hero.png";
import Button from "../components/buttons/button";
import { icons } from "../components/icons/techStack";
import { ArrowBigDown, ArrowDown, BaggageClaimIcon, Briefcase, GraduationCap } from "lucide-react";
import Image1 from "../assets/images/image1.jpg";
import Image2 from "../assets/images/image2.jpg";

const Home = () => {
  const JsIcon = icons.javascript;
  return (
    <section id="home" className="">
      <div className="flex flex-col px-4 max-w-100 mx-auto md:max-w-140 ">
        <div className=" flex flex-col gap-3">
          <h1 className="text-[#3B2E2E] font-bold text-5xl/tight ">
            Hello I’m Jhon Aspiring Fullstack Developer
          </h1>
          <p className="font-medium text-gray-900">
            Building skills one project at a time, driven by curiosity and a
            passion for clean, functional web experiences
          </p>

         <div className="flex flex-col items-center my-5">
          <span className="mb-3">About</span>
          <span className="animate-bounce -z-3"><ArrowDown/></span>
         </div>
        </div>

        <div className="p-5 bg-neutral-50 rounded-md mt-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <span>
              <GraduationCap />
            </span>
            <span className="font-medium">Education</span>
          </div>

          <div>
            <p>Diploma in Information in Technologyr</p>
            <p>-Aces Tagum College INC.</p>
          </div>
        </div>

        <div className="overflow-x-scroll mt-4  ">
          <div className="flex gap-3 max-h-60 ">
            <img
              src={Image1}
              alt="image1"
              className="rounded-md object-cover "
            />
            <img
              src={Image2}
              alt="image1"
              className="rounded-md object-cover"
            />
            <img
              src={Image1}
              alt="image1"
              className="rounded-md object-cover"
            />
            <img
              src={Image1}
              alt="image1"
              className="rounded-md object-cover"
            />
          </div>
        </div>

        <div className="p-4 bg-neutral-50 mt-5 rounded-md">
          <div className="my-3 flex gap-2 text-[#3B2E2E] ">
            <span><Briefcase/></span>
            <span className="font-bold">On Job Training</span>
          </div>

          <span className="font-bold text-[#3B2E2E] block my-3 ">Software Development</span>
          <ul className="list-disc px-5 font-Inter text-gray-800">
            <li>
              {" "}
              Assisted in creating a simple web project using templates and
              guided instructions
            </li>
            <li>
              {" "}
              Developed basic features such as Add, Update, and Read functions
            </li>
            <li>
              Practiced working with basic CRUD operations under instructor
              supervision.{" "}
            </li>
            <li>
              {" "}
              Learned how to structure web pages and organize project files
              properly.
            </li>
            <li>
              {" "}
              Collaborated with classmates while following step-by-step
              development guidance.
            </li>
            <li>
              {" "}
              Collaborated with classmates while following step-by-step
              development guidance.
            </li>
            <li>
              Improved understanding of workflow, coding discipline, and proper
              project setup.
            </li>
            <li>
              {" "}
              Strengthened skills in following instructions and applying lessons
              to a real mini-project.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
