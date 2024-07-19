import React from "react";
import Navbar from "../../components/landing/Navbar";
import ContentOne from "../../components/landing/aboutUs/ContentOne";
import ContentTwo from "../../components/landing/aboutUs/ContentTwo";

const AboutUs = () => {
  return (
    <div>
      <div className="absolute">
        <Navbar />
      </div>
      <ContentOne />
      <ContentTwo />
    </div>
  );
};

export default AboutUs;
