import React from "react";
import Navbar from "../../components/landing/Navbar";
import ContentOne from "../../components/landing/aboutUs/ContentOne";
import ContentTwo from "../../components/landing/aboutUs/ContentTwo";
import ContentThree from "../../components/landing/aboutUs/ContentThree";
import Footer from "../../components/landing/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="absolute">
        <Navbar />
      </div>
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <Footer />
    </div>
  );
};

export default AboutUs;
