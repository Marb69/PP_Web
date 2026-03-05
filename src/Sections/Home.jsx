import React from "react";
import Profile from "../assets/images/Profile.png";
import { data } from "../data/techStack";
import TechCard from "../components/cards/techCard";
import { Facebook, InstagramIcon } from "lucide-react";
import Button from "../components/buttons/button";

const Home = () => {
  const facebook = <Facebook />;
  const Instagram = <InstagramIcon />;

  return (
    <section id="home" className="h-screen content-center relative ">
      <div className="absolute  left-100 top-4 hidden lg:block max-w-90 bg-gray-100 p-8 rounded-t-4xl rounded-bl-4xl">
        <h1 className="text-7xl font-bold">HELLO I'M MARB</h1>
        <p className="text-2xl rotate-4 mt-3 font-medium">A Aspiring Web Developer</p>
      </div>
      <div className="flex flex-col  mx-auto items-center md:max-w-130 max-w-90 ">
        <img
          src={Profile}
          alt=""
          className="rounded-[50%] h-40 w-40 object-cover"
        />

        <span className="font-bold mt-4">Hi, I'm Jhon Alvert</span>
        <span className="">A Student Of Aces Tagum College</span>

        <div className="flex flex-wrap gap-2 mt-5 lg:max-w-110 md:max-w-90 max-w-110">
          {data.map((data) => (
            <TechCard
              className={
                "px-3 py-1 border border-green-500 text-green-500 rounded-md flex-1 "
              }
              context={data}
            />
          ))}
        </div>

        <div className="flex gap-4 mt-5">
          <span className="p-2 border rounded-[50%] block">{facebook}</span>
          <span className="p-2 border rounded-[50%] block">{Instagram}</span>
          <span className="p-2 border rounded-[50%] block">{facebook}</span>
        </div>

        <div className="flex gap-2 mt-5">
          <Button className={"bg-blue-500 text-white"} context={"Exlplore"} />
          <Button
            className={"border border-blue-500 text-blue-500"}
            context={"Download RVC"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
