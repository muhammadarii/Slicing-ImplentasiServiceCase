import React from "react";
import pictHome1 from "../../../img/home/pictHome1.png";

const ContentOne = () => {
  return (
    <div className="container mx-auto text tracking-wide">
      <div className="flex flex-row justify-between">
        <div className="mt-20 ">
          <h1 className="text-5xl font-semibold">Observe Your</h1>
          <span className="text-5xl font-extrabold py-4">Power</span>
          <p className="w-[541px] py-8">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="text-white font-bold tracking-tight bg-blue-500 px-10 py-3 rounded-full shadow-lg shadow-blue-500">
            See a Demo
          </button>
        </div>
        <div className="flex justify-center">
          <img src={pictHome1} alt="pictHome1" />
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
