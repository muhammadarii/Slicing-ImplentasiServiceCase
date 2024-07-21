import React from "react";
import Vector1 from "../../../img/aboutus/Vector1.png";
import Placeholder1 from "../../../img/aboutus/Placeholder1.png";
import Placeholder2 from "../../../img/aboutus/Placeholder2.png";
import Placeholder3 from "../../../img/aboutus/Placeholder3.png";

const dummyData = [
  {
    name: "Xavier Oswald",
    title: "CO-FOUNDER DEVELOPER",
    image: Placeholder1,
  },
  {
    name: "Sara Creighton",
    title: "CO-FOUNDER DEVELOPER",
    image: Placeholder2,
  },
  {
    name: "Brandon Ogden",
    title: "PROJECT MANAGER",
    image: Placeholder3,
  },
];

const ContentTwo = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <img src={Vector1} alt="vector1" className="mt-16" />
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-center w-[500px] text-[#4F5665]">
              In just small steps you’ll connected directly to our technology.
              Knowledge about your own-power, your rivals, your voters, and your
              region in Election.
            </p>
          </div>
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-[#1E0E62] mt-16">
              Our Advisors
            </h1>
          </div>
          <div className="flex flex-col gap-3 mt-10 ">
            <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center lg:gap-3 ">
              {dummyData.map((item, index) => (
                <div className="rounded-xl h-[270px] shadow-lg" key={index}>
                  <img src={item.image} alt="placeholder1" />
                  <div className="flex flex-col justify-center text-center mt-4">
                    <h1 className="text-xl font-semibold">{item.name}</h1>
                    <p className="p-2">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
