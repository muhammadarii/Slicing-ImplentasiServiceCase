import React from "react";
import image5 from "../../../img/home/image5.png";
import image6 from "../../../img/home/image6.png";
import image7 from "../../../img/home/image7.png";
import image8 from "../../../img/home/image8.png";

const dummyData = [
  {
    title: "Geographic Segmentation",
    content:
      "Consist of creating different groups of customers based on geographic boundaries",
    image: image5,
  },
  {
    title: "Demographic Segmentation",
    content:
      "Consist of dividing the market through different variables such as age, gender, income, etc",
    image: image6,
  },
  {
    title: "Psychographic Segmentation",
    content:
      "Consist of creating different groups of customers based on geographic boundaries",
    image: image7,
  },
  {
    title: "Behavorial Segmentation",
    content:
      "Consist of creating different groups of customers based on geographic boundaries",
    image: image8,
  },
];

const ContentFour = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-extrabold text-3xl text-center mt-10">
        How it works for you?
      </h1>
      <div className="flex justify-center my-5">
        <p className="text-center max-w-2xl text-[#4F5665]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="flex justify-center mb-10">
        <button className="text-white font-bold tracking-tight shadow-lg shadow-[#2161D5] bg-[#2161D5] px-10 py-3 rounded-full hover:bg-blue-500">
          See a Demo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:mx-96">
        {dummyData.map((item, index) => (
          <div className="flex justify-center my-10" key={index}>
            <div className="w-full max-w-sm overflow-hidden shadow-xl m-4 rounded-2xl hover:border-2 hover:border-[#2161D5]">
              <div className="flex justify-center my-10">
                <img
                  src={item.image}
                  alt="imageDummy"
                  className="w-[303px] h-[224px] my-4 object-contain"
                />
              </div>
              <h1 className="font-bold px-8 text-2xl text-center my-4">
                {item.title}
              </h1>
              <div className="px-8 pb-16 text-[#4F5665] text-center">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentFour;
