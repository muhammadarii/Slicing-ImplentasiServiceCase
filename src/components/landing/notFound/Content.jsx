import React from "react";
import NotFound from "../../../img/NotFound/NotFound.png";

const Content = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div className="flex items-center min-h-screen">
          <div>
            <p className="text-3xl font-semibold">Ooops!</p>
            <p className="text-3xl font-semibold">Page Not Found</p>
            <p className="mt-6 text-[#4F5665] font-semibold">
              This page doesn't exist or was removed
              <br />
              We Suggest You back to home
            </p>
            <button className="text-white font-bold tracking-tight bg-[#2161D5] px-10 py-3 rounded-full  mt-6">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={NotFound}
            alt="NotFound"
            className="w-[602.39px] h-[400px] mt-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
