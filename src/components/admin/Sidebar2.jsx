import React from "react";
import {
  FiSlack,
  FiArchive,
  FiServer,
  FiDatabase,
  FiWifi,
  FiFigma,
  FiImage,
  FiUser,
  FiPocket,
} from "react-icons/fi";
import Logo3 from "../../img/Logo3.png";

const Sidebar2 = () => {
  return (
    <>
      <div className=" w-[80px] bg-gray-800 text-gray-100 h-lvh">
        <div className="flex items-center justify-center mt-10">
          <img src={Logo3} alt="" className=" -ml-1 mt-[19px]" />
        </div>
        <div className="mt-10">
          <a
            href="/dashboard"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_4047)">
                <path
                  d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10.0001C10.8334 9.53984 10.4603 9.16675 10 9.16675C9.53978 9.16675 9.16669 9.53984 9.16669 10.0001C9.16669 10.4603 9.53978 10.8334 10 10.8334Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.175 8.82508L13.3333 6.66675"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83331 9.99992C5.83331 8.89485 6.2723 7.83504 7.0537 7.05364C7.8351 6.27224 8.89491 5.83325 9.99998 5.83325"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_4047">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <br />
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiSlack className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiArchive className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiServer className="h-6 w-6" />
          </a>
          <a
            href="/datasource"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiDatabase className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiWifi className="h-6 w-6" />
          </a>
          <br />
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiFigma className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiImage className="h-6 w-6" />
          </a>
          <br />
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiUser className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <FiPocket className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="flex items-center mt-4 py-2 px-6 text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 7.5H17.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 17.5V7.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
