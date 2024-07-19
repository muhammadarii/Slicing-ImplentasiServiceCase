import React from "react";
import Logo from "../../img/Logo.png";

const Navbar = () => {
  return (
    <nav className="py-10 ">
      <div className="fixed top-8 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img src={Logo} alt="logo" className="w-32" />
          <div className="flex-grow flex justify-center">
            <div className="hidden md:flex space-x-4">
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
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="text-black font-bold hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:rounded-full px-8 py-2">
              Sign In
            </button>
            <button className="text-blue-500 px-8 py-2 border-2 border-blue-500 rounded-full font-bold hover:bg-blue-500 hover:text-white ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
