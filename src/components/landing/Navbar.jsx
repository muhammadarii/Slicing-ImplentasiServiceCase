import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={Logo} alt="logo" className="w-32" />
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:block space-x-4">
          <a
            href="/"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Home
          </a>
          <a
            href="/product"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Product
          </a>
          <a
            href="/blog"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Blog
          </a>
          <a
            href="/pricing"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Contact
          </a>
          <a
            href="/aboutus"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            About Us
          </a>
        </div>
        <div className="hidden lg:block space-x-4">
          <Link to="/login">
            <button className="text-black font-bold hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded-full px-8 py-2">
              Sign In
            </button>
          </Link>
          <button className="text-blue-500 px-8 py-2 border-2 border-blue-500 rounded-full font-bold hover:bg-blue-500 hover:text-white ">
            Sign Up
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" bg-white bg-opacity-50 backdrop-blur-sm w-full flex flex-col items-center py-4 space-y-2 shadow-md">
          <a
            href="/"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Home
          </a>
          <a
            href="/product"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Product
          </a>
          <a
            href="/blog"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Blog
          </a>
          <a
            href="/pricing"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            Contact
          </a>
          <a
            href="/aboutus"
            className="text-black px-3 py-2 font-semibold hover:font-extrabold"
          >
            About Us
          </a>
          <Link to="/login">
            <button className="text-black font-bold hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded-full px-8 py-2">
              Sign In
            </button>
          </Link>
          <button className="text-blue-500 px-8 py-2 border-2 border-blue-500 rounded-full font-bold hover:bg-blue-500 hover:text-white ">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
