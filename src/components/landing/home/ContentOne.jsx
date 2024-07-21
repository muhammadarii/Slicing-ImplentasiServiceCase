import React from "react";
import pictHome1 from "../../../img/home/pictHome1.png";

const ContentOne = () => {
  return (
    <div className="container mx-auto px-4 text tracking-wide">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-20">
        <div className="mt-10 lg:mt-28 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-semibold">Observe Your</h1>
          <span className="text-4xl lg:text-5xl font-extrabold py-4 block">
            Power
          </span>
          <p className="lg:w-[541px] py-8">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="text-white font-bold tracking-tight bg-blue-500 px-10 py-3 rounded-full shadow-lg shadow-blue-500">
            See a Demo
          </button>
        </div>
        <div className="flex justify-center mt-10 lg:mt-0">
          <img src={pictHome1} alt="pictHome1" className="w-full lg:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
