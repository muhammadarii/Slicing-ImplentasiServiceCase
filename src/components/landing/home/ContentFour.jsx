import React from "react";
import image5 from "../../../img/home/image5.png";
import image6 from "../../../img/home/image6.png";
import image7 from "../../../img/home/image7.png";
import image8 from "../../../img/home/image8.png";

const ContentFour = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-extrabold text-3xl text-center">
        How it works for you?
      </h1>
      <div className="flex flex-row justify-center my-5">
        <p className="text-center w-[464px] text-[#4F5665]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="flex justify-center mb-10">
        <button className=" text-white font-bold tracking-tight shadow-lg shadow-[#2161D5] bg-[#2161D5] px-10 py-3 rounded-full">
          See a Demo
        </button>
      </div>

      <div className="container mx-auto grid grid-cols-2 w-[900px]">
        <div className="flex flex-row justify-center my-10 ">
          <div className="w-[424px] h-[488] overflow-hidden shadow-xl m-4 rounded-2xl">
            <div className="flex justify-center my-10">
              <img
                src={image5}
                alt="image5"
                className="w-[303px] h-[224px] my-4"
              />
            </div>
            <h1 className="font-bold px-8 text-2xl text-center my-4">
              Geographic Segmentation
            </h1>
            <p className="px-8 pb-16 text-[#4F5665] text-center ">
              Consist of creating differend groups of customers based on
              geographic boundaries
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center my-10 ">
          <div className="w-[424px] h-[488] overflow-hidden shadow-xl m-4 rounded-2xl">
            <div className="flex justify-center my-10">
              <img
                src={image6}
                alt="image6"
                className="w-[300px] h-[224px] my-4"
              />
            </div>
            <h1 className="font-bold px-8 text-2xl text-center my-4">
              Demographic Segmentation
            </h1>
            <p className="px-8 pb-16 text-[#4F5665] text-center ">
              Consist of dividing the market through different variables such as
              age, gender, income, etc
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center my-10 ">
          <div className="w-[424px] h-[488] overflow-hidden shadow-xl m-4 rounded-2xl">
            <div className="flex justify-center">
              <img
                src={image7}
                alt="image7"
                className="w-[303px] h-[224px] my-4"
              />
            </div>
            <h1 className="font-bold px-8 text-2xl text-center my-4">
              Psychographic Segmentation
            </h1>
            <p className="px-8 pb-16 text-[#4F5665] text-center ">
              Consist of creating differend groups of customers based on
              geographic boundaries
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center my-10 ">
          <div className="w-[424px] h-[488] overflow-hidden shadow-xl m-4 rounded-2xl">
            <div className="flex justify-center">
              <img
                src={image8}
                alt="image8"
                className="w-[303px] h-[224px] my-4"
              />
            </div>
            <h1 className="font-bold px-8 text-2xl text-center my-4">
              Behavorial Segmentation
            </h1>
            <p className="px-8 pb-16 text-[#4F5665] text-center ">
              Consist of creating differend groups of customers based on
              geographic boundaries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFour;
