import React from "react";
import vector1 from "../../../img/home/vector1.png";
import vector2 from "../../../img/home/vector2.png";
import vector3 from "../../../img/home/vector3.png";

const dummyData = [
  {
    title: "Data",
    content: "The biggest regional data, development, and POI data.",
    image: vector1,
  },
  {
    title: "Technology",
    content: "Geospatial platform with advanced analysis that suit your needs.",
    image: vector2,
  },
  {
    title: "Services",
    content: "An expert team help you to analyze your political power.",
    image: vector3,
  },
];

const ContentTwo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center pt-20">
        <h1 className="text-3xl font-extrabold">Why choose us?</h1>
      </div>
      <p className="text-center my-5">
        We provide to you the best choices for you.
        <br /> The leading political campaign intelligence platform.
      </p>
      <div className="flex flex-wrap justify-center my-10">
        {dummyData.map((item, index) => (
          <div
            className="w-full sm:w-[327px] overflow-hidden shadow-lg m-4 border-2 rounded-2xl hover:border-blue-500"
            key={index}
          >
            <div className="flex justify-center p-8">
              <img
                src={item.image}
                alt={item.title}
                className="w-[120px] h-[120px]"
              />
            </div>
            <h1 className="font-bold px-8 text-2xl text-center">
              {item.title}
            </h1>
            <p className="px-8 pt-4 pb-8 text-[#4F5665] text-center">
              {item.content}
            </p>
          </div>
        ))}
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
