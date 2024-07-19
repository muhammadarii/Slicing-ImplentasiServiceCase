import React from "react";
import Navbar from "../../components/landing/Navbar";
import ContentOne from "../../components/landing/home/ContentOne";
import ContentTwo from "../../components/landing/home/ContentTwo";
import ContentThree from "../../components/landing/home/ContentThree";
import ContentFour from "../../components/landing/home/ContentFour";
import ContentFive from "../../components/landing/home/ContentFive";
import ContentSix from "../../components/landing/home/ContentSix";
import Footer from "../../components/landing/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <ContentFour />
      <ContentFive />
      <ContentSix />
      <Footer />
    </div>
  );
};

export default Home;
