import React from "react";
import image2 from "../../../img/home/image2.png";
import image3 from "../../../img/home/image3.png";
import image4 from "../../../img/home/image4.png";
import element1 from "../../../img/home/element1.png";
import element2 from "../../../img/home/element2.png";
import element3 from "../../../img/home/element3.png";
import element4 from "../../../img/home/element4.png";

const ContentThree = () => {
  return (
    <div className="bg-[#2161D5] h-[1850px] my-40">
      <div className="relative">
        <img
          src={element2}
          alt="image1"
          className="absolute right-3 top-3 hidden md:block"
        />
        <div>
          <img
            src={element1}
            alt=""
            className="absolute left-[150px] top-10 hidden md:block"
          />
          <img
            src={image2}
            alt=""
            className="absolute left-[23px] -top-[50px] md:left-[345px] md:-top-14 w-[345px] h-[440px]"
          />
          <div className="absolute -left-[10px] top-[400px] text-center md:text-left md:left-[716px] md:top-[180px]">
            <h1 className="text-white md:text-3xl font-bold">App Overview 1</h1>
            <p className="text-sm md:text-base md:w-[410px] py-4 text-white font-thin">
              Advanced spatial analysis to understand where and why things
              happen, identify the target constituency, and optimize the
              campaign.
            </p>
            <button className="text-white font-medium tracking-tighter px-10 py-3 border-2 border-white rounded-full">
              Learn More
            </button>
          </div>
          <div>
            <img
              src={element3}
              alt=""
              className="absolute right-20 top-[500px] hidden md:block"
            />
            <img
              src={image3}
              alt=""
              className="absolute md:right-32 top-[625px] w-[497.01px] h-[450px]"
            />
            <div className="absolute text-center top-[1100px] md:text-left md:left-[416px] md:top-[800px]">
              <h1 className="text-white md:text-3xl font-bold">
                App Overview 2
              </h1>
              <p className="text-sm md:text-base md:w-[410px] py-4 text-white font-thin">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="text-white font-medium tracking-tighter px-10 py-3 my-3 border-2 border-white rounded-full">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              src={element4}
              alt=""
              className="absolute hidden md:block left-[150px] top-[1190px]"
            />
            <img
              src={image4}
              alt=""
              className="absolute top-[1320px] md:left-[150px] md:top-[1300px] w-500px] h-[239.11px]"
            />
            <div className="absolute top-[1580px] text-center md:text-left md:left-[716px] md:top-[1350px]">
              <h1 className="text-white md:text-3xl font-bold">
                App Overview 3
              </h1>
              <p className="md:w-[410px] text-sm md:text-base py-4 text-white font-thin leading-[30px]">
                Advanced spatial analysis to understand where and why things
                happen, identify the target constituency, and optimize the
                campaign.
              </p>
              <button className="text-white font-medium tracking-tighter px-10 py-3 my-3 border-2 border-white rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentThree;
