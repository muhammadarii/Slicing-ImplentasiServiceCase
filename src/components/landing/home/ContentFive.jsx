import React from "react";
import vector4 from "../../../img/home/vector4.png";
import { FcCheckmark } from "react-icons/fc";

const ContentFive = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-28">
        <h1 className="text-3xl font-bold">Plans and Pricing</h1>
        <div className="flex justify-center my-5">
          <p className="text-[#4F5665] w-[417px]">
            We provide to you the best choiches for you. The leading political
            campaign intelligence platform
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-[330px] h-[720px] overflow-hidden shadow-lg m-4 border-2 rounded-2xl hover:border-2 hover:border-blue-500">
          <div className="flex justify-center mt-12">
            <img
              src={vector4}
              alt="vector4"
              className="w-[144.9px] h-[165.37px]"
            />
          </div>
          <h1 className="font-semibold text-xl py-4 text-center">
            Individual Plan
          </h1>
          <div className="flex flex-row my-4">
            <FcCheckmark className="text-xl ml-10" />
            <p className="ml-8">1 user</p>
          </div>
          <div className="flex flex-row my-4">
            <FcCheckmark className="text-xl ml-10" />
            <p className="ml-8">1 Basic Analysis</p>
          </div>
          <div className="flex flex-row my-4">
            <FcCheckmark className="text-xl ml-10" />
            <p className="ml-8">Unlimited Select Services</p>
          </div>
          <div className="flex flex-col my-[130px] justify-center ">
            <div className="flex flex-row justify-center my-8">
              <h1 className="font-bold text-3xl text-center">$99</h1>
              <span className="text-3xl"> / mo</span>
            </div>
            <div className="flex justify-center">
              <button className="text-blue-500 font-bold tracking-tight border-2 border-blue-500 px-16 py-2 rounded-full hover:bg-blue-500 hover:text-white">
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="w-[330px] h-[720px] overflow-hidden shadow-lg m-4 border-2 rounded-2xl hover:border-2 hover:border-blue-500">
          <div className="flex justify-center mt-12">
            <img
              src={vector4}
              alt="vector4"
              className="w-[144.9px] h-[165.37px]"
            />
          </div>
          <h1 className="font-semibold text-xl py-4 text-center">
            Parties Plan
          </h1>
          <div className="flex flex-row my-4">
            <FcCheckmark className="text-xl ml-10" />
            <p className="ml-8">Unlimited User</p>
          </div>
          <div className="flex flex-row my-4">
            <FcCheckmark className="text-xl ml-10" />
            <p className="ml-8">1 Basic Analysis</p>
          </div>
          <div className="flex flex-row my-4">
            <FcCheckmark className="text-xl ml-10" />
            <p className="ml-8">Unlimited Select Services</p>
          </div>
          <div className="flex flex-row my-4">
            <FcCheckmark className="text-xl ml-10" />
            <p className="ml-8">Free extend 1 Month</p>
          </div>
          <div className="flex flex-col my-[89px] justify-center ">
            <div className="flex flex-row justify-center my-8">
              <h1 className="font-bold text-3xl text-center">$500</h1>
              <span className="text-3xl"> / mo</span>
            </div>
            <div className="flex justify-center">
              <button className="text-blue-500 font-bold tracking-tight border-2 border-blue-500 px-16 py-2 rounded-full hover:bg-blue-500 hover:text-white">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFive;
