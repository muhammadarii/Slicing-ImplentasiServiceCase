import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "font-extrabold"
      : "text-black font-semibold hover:font-extrabold";
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
          <Link to="/" className={`px-3 py-2 ${getLinkClass("/")}`}>
            Home
          </Link>
          <Link
            to="/product"
            className={`px-3 py-2 ${getLinkClass("/product")}`}
          >
            Product
          </Link>
          <Link to="/blog" className={`px-3 py-2 ${getLinkClass("/blog")}`}>
            Blog
          </Link>
          <Link
            to="/pricing"
            className={`px-3 py-2 ${getLinkClass("/pricing")}`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-2 ${getLinkClass("/contact")}`}
          >
            Contact
          </Link>
          <Link
            to="/aboutus"
            className={`px-3 py-2 ${getLinkClass("/aboutus")}`}
          >
            About Us
          </Link>
        </div>
        <div className="hidden lg:block space-x-4">
          <Link to="/login">
            <button className="text-black font-bold hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded-full px-8 py-2">
              Sign In
            </button>
          </Link>
          <button className="text-blue-500 px-8 py-2 border-2 border-blue-500 rounded-full font-bold hover:bg-blue-500 hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white bg-opacity-50 backdrop-blur-sm w-full flex flex-col items-center py-4 space-y-2 shadow-md">
          <Link to="/" className={`px-3 py-2 ${getLinkClass("/")}`}>
            Home
          </Link>
          <Link
            to="/product"
            className={`px-3 py-2 ${getLinkClass("/product")}`}
          >
            Product
          </Link>
          <Link to="/blog" className={`px-3 py-2 ${getLinkClass("/blog")}`}>
            Blog
          </Link>
          <Link
            to="/pricing"
            className={`px-3 py-2 ${getLinkClass("/pricing")}`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-2 ${getLinkClass("/contact")}`}
          >
            Contact
          </Link>
          <Link
            to="/aboutus"
            className={`px-3 py-2 ${getLinkClass("/aboutus")}`}
          >
            About Us
          </Link>
          <Link to="/login">
            <button className="text-black font-bold hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded-full px-8 py-2">
              Sign In
            </button>
          </Link>
          <button className="text-blue-500 px-8 py-2 border-2 border-blue-500 rounded-full font-bold hover:bg-blue-500 hover:text-white">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
