import React, { useState } from "react";
import { FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import profile from "../../img/Profile.png";
import Arrow from "../../img/Arrow.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const toggleDropdown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <>
      <div className="w-full fixed">
        <div className="w-full  bg-gray-200 text-black p-3 flex justify-between items-center">
          <div className="cursor-pointer" onClick={toggleSidebar}>
            {isOpenSidebar ? (
              <div className="ml-[170px] md:ml-[260px] lg:ml-[260px]">
                <FaBarsStaggered />
              </div>
            ) : (
              <div className=" md:ml-[10px] lg:ml-[80px] ">
                <FaAngleRight />
              </div>
            )}
          </div>

          <div className="flex gap-2 mr-5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" />
              <path
                d="M29.6216 20.7028C29.4772 20.5835 29.3023 20.5071 29.1166 20.4823C28.931 20.4576 28.7421 20.4855 28.5716 20.5628C27.5142 21.0467 26.3645 21.2957 25.2016 21.2928C23.0504 21.2902 20.9876 20.4372 19.4627 18.9199C17.9379 17.4026 17.0748 15.3439 17.0616 13.1928C17.0661 12.5186 17.1501 11.8473 17.3116 11.1928C17.3459 11.0183 17.333 10.8379 17.2743 10.67C17.2157 10.5022 17.1133 10.353 16.9778 10.2379C16.8423 10.1228 16.6786 10.0459 16.5035 10.0151C16.3284 9.98432 16.1482 10.0008 15.9816 10.0628C14.4139 10.7677 13.0512 11.8595 12.0213 13.2358C10.9915 14.612 10.3285 16.2274 10.0944 17.9303C9.8604 19.6331 10.0631 21.3675 10.6835 22.9706C11.3038 24.5736 12.3215 25.9926 13.6409 27.0943C14.9603 28.1959 16.5381 28.9442 18.226 29.2686C19.914 29.593 21.6567 29.4831 23.2905 28.949C24.9243 28.415 26.3955 27.4743 27.566 26.2155C28.7364 24.9567 29.5676 23.4211 29.9816 21.7528C30.032 21.5618 30.0247 21.3601 29.9606 21.1733C29.8966 20.9864 29.7786 20.8227 29.6216 20.7028V20.7028ZM20.1216 27.3928C18.4433 27.3809 16.8098 26.8507 15.4446 25.8745C14.0794 24.8984 13.0492 23.5241 12.4953 21.9399C11.9413 20.3557 11.8905 18.639 12.3499 17.0248C12.8093 15.4106 13.7564 13.9779 15.0616 12.9228V13.1928C15.0642 15.8813 16.1334 18.4589 18.0344 20.3599C19.9355 22.261 22.5131 23.3301 25.2016 23.3328C25.9075 23.3354 26.6116 23.2616 27.3016 23.1128C26.6115 24.4183 25.578 25.5106 24.3127 26.2719C23.0474 27.0332 21.5983 27.4346 20.1216 27.4328V27.3928Z"
                fill="#0B132A"
              />
            </svg>
            <div
              className="relative flex flex-row gap-3 items-center "
              onClick={toggleDropdown}
            >
              <img
                src={profile}
                alt="Profile"
                className="cursor-pointer"
                onClick={toggleDropdown}
              />
              <p className="hidden md:block lg:block mt-1 cursor-pointer">
                User.Inc
              </p>
              <img
                src={Arrow}
                alt="Arrow"
                className="cursor-pointer mt-2"
                onClick={toggleDropdown}
              />
              {isOpenDropDown && (
                <ul className="absolute top-full right-0 mt-2 w-48 rounded-box shadow-lg z-10 bg-white">
                  <li className="flex flex-row gap-2 px-4 py-2 hover:bg-gray-200 rounded-t-box">
                    <FaRegUserCircle className="mt-1" />
                    <p>Profile</p>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="flex flex-row gap-2 px-4 py-2 hover:bg-gray-200 rounded-b-box cursor-pointer"
                  >
                    <FaSignOutAlt className="mt-1" />
                    <p>Sign Out</p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        {isOpenSidebar ? (
          <div className="h-full">
            <div className="absolute -top-10 left-0">
              <Sidebar />
            </div>
          </div>
        ) : (
          <div className="hidden lg:block h-full">
            <div className="absolute -top-10 left-0">
              <Sidebar2 />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
