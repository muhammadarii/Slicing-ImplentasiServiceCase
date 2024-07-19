import React from "react";
import Frame1 from "../../img/footer/Frame1.png";
import Facebook from "../../img/footer/Facebook.png";
import Instagram from "../../img/footer/Instagram.png";
import Twitter from "../../img/footer/Twitter.png";

const Footer = () => {
  return (
    <footer className="container mx-auto my-40">
      <div className="flex justify-center">
        <div className="bg-[#2161D5] w-[1140px] h-[233px] rounded-lg">
          <div className="relative  ">
            <div className="absolute top-[60px] left-16">
              <h1 className=" text-white font-bold text-3xl w-[300px]">
                Subscribe Now for Get Special Features!
              </h1>
              <p className="text-white py-4">
                Let's subscribe with us and find the fun.
              </p>
            </div>
            <div className="absolute top-[90px] right-20">
              <button className="text-[#2161D5] bg-white font-bold tracking-tighter px-10 py-3 rounded-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-40">
        <div className="grid grid-cols-5 w-[1140px]">
          <div className="col-span-2">
            <div>
              <img src={Frame1} alt="Frame1" />
              <p className="w-[300px] text-sm my-4">
                Geolabs is a private virtual network that has unique features
                and has high security.
              </p>
              <div className="flex -ml-7">
                <div className="grid grid-cols-3">
                  <img src={Facebook} alt="Facebook" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={Twitter} alt="Twitter" />
                </div>
              </div>
              <p className="text-md text-[#4F5665]">©2020EBDESK</p>
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
