import React from "react";
import Frame1 from "../../img/footer/Frame1.png";
import Facebook from "../../img/footer/Facebook.png";
import Instagram from "../../img/footer/Instagram.png";
import Twitter from "../../img/footer/Twitter.png";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 my-20">
      <div className="flex justify-center mb-16">
        <div className="bg-[#2161D5] w-full max-w-6xl h-auto py-10 rounded-lg">
          <div className="relative flex flex-col md:flex-row items-center md:items-start px-8 md:px-16">
            <div className="md:mr-auto md:py-6 text-center md:text-left">
              <h1 className="text-white font-bold text-3xl md:w-[300px]">
                Subscribe Now for Get Special Features!
              </h1>
              <p className="text-white py-4">
                Let's subscribe with us and find the fun.
              </p>
            </div>
            <div className="mt-4">
              <button className="text-[#2161D5] bg-white font-bold tracking-tighter px-10 py-3 rounded-lg md:mt-10">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-6xl">
          <div className="md:col-span-2">
            <div>
              <div className="flex justify-center md:flex md:justify-start lg:flex lg:justify-start">
                <img src={Frame1} alt="Frame1" />
              </div>
              <div className="flex justify-center text-center md:text-left">
                <p className="text-sm my-4">
                  Geolabs is a private virtual network that has unique features
                  and has high security.
                </p>
              </div>
              <div className="flex justify-center md:justify-center lg:justify-start">
                <div className="flex space-x-4">
                  <img src={Facebook} alt="Facebook" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={Twitter} alt="Twitter" />
                </div>
              </div>
              <p className="text-md text-[#4F5665] mt-4">©2020EBDESK</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Product</p>
            <div className="flex flex-col mt-4 gap-y-3">
              <p>Download</p>
              <p>Pricing</p>
              <p>Locations</p>
              <p>Server</p>
              <p>Countries</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Engage</p>
            <div className="flex flex-col mt-4 gap-y-3">
              <p>Geolabs ?</p>
              <p>FAQ</p>
              <p>Tutorials</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Services</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Earn Money</p>
            <div className="flex flex-col mt-4 gap-y-3">
              <p>Affiliate</p>
              <p>Become Partner</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
