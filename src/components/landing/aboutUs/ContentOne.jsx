import React from "react";
import Circle from "../../../img/aboutus/Circle.png";

const ContentOne = () => {
  return (
    <div className="bg-[#2161D5] h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center">
          <img
            src={Circle}
            alt="Circle"
            className="w-full max-w-[1000px] h-auto -mt-10"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              About Us
            </h1>
            <p className="mt-6 text-white text-center max-w-lg md:max-w-3xl">
              A small company offering data-driven solutions for campaign
              effectiveness using spatial data and detailed analysis of target
              audience (voters). Use technology that unites spatial data science
              and political science.
            </p>
            <button className="text-[#2161D5] font-medium tracking-tighter px-10 py-3 border-2 border-white bg-white rounded-full mt-10">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
