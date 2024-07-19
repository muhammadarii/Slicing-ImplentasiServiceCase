import React from "react";
import vector1 from "../../../img/home/vector1.png";
import vector2 from "../../../img/home/vector2.png";
import vector3 from "../../../img/home/vector3.png";

const ContentTwo = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center pt-[200px]">
        <h1 className="text-3xl font-extrabold">Why choose us?</h1>
      </div>
      <p className="text-center my-5">
        We provide to you the best choiches for you.
        <br /> The leading political campaign intelligence platform
      </p>
      <div className="flex flex-row justify-center my-10">
        <div className="w-[327px]  hover: border-blue-500">
          <img src={vector1} alt="vector1" className="p-8" />
          <h1 className="font-bold px-8 text-2xl">Data</h1>
          <p className="px-8 pt-4 pb-16 text-[#4F5665]">
            The biggest regional data,
            <br /> development, and POI data.
          </p>
        </div>
        <div className="w-[327px] overflow-hidden shadow-lg m-4 border-2 rounded-2xl hover: border-blue-500">
          <img src={vector2} alt="vector1" className="p-8" />
          <h1 className="font-bold px-8 text-2xl">Technology</h1>
          <p className="px-8 pt-4 pb-16 text-[#4F5665]">
            Geospatial platform with advanced
            <br /> analysis that suit your neetds.
          </p>
        </div>
        <div className="w-[327px] overflow-hidden shadow-lg m-4 border-2 rounded-2xl hover: border-blue-500">
          <img src={vector3} alt="vector1" className="p-8" />
          <h1 className="font-bold px-8 text-2xl">Services</h1>
          <p className="px-8 pt-4 pb-16 text-[#4F5665]">
            An expert team help you to analyze
            <br />
            your poltical power.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="text-blue-500 font-bold tracking-tighter px-10 py-3 border-2 border-blue-500 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ContentTwo;
