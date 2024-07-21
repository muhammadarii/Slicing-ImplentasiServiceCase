import React from "react";
import ChartOne from "./Dashboard/Chart/ChartOne";
import ChartTwo from "./Dashboard/Chart/ChartTwo";
import ChartThree from "./Dashboard/Chart/ChartThree";
import ChartFour from "./Dashboard/Chart/ChartFour";
import ChartFive from "./Dashboard/Chart/ChartFive";
import ChartSix from "./Dashboard/Chart/ChartSix";
import ChartSeven from "./Dashboard/Chart/ChartSeven";
// import ChartOne from "./Chart/ChartOne";

const ContentOne = () => {
  return (
    <div className="container mx-auto">
      <div className=" md:p-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-1">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="pt-4 bg-slate-100 w-[362px] h-[310px] lg:w-[557px] lg:h-[329px] rounded-md">
                  <ChartOne />
                </div>
                <div className="pt-4 bg-slate-100 w-[362px] h-[310px] lg:w-[557px] lg:h-[329px] rounded-md">
                  <ChartTwo />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              <div className="pt-4 bg-slate-100 w-[362px] h-[310px] rounded-md">
                <ChartThree />
              </div>
              <div className="pt-4 bg-slate-100 w-[362px] h-[310px] rounded-md">
                <ChartFour />
              </div>
              <div className="pt-4 bg-slate-100 w-[362px] h-[310px] rounded-md">
                <ChartFive />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
              <div className="pt-4 bg-slate-100 w-[362px] h-[310px] md:w-[362px] md:h-[310px] rounded-md">
                <ChartSix />
              </div>
              <div className="pt-4 col-span-2 bg-slate-100 w-[390px] h-[310px] md:w-[747px] md:h-[310px] rounded-md">
                <ChartSeven />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
