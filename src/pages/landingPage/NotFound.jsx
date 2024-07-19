import React from "react";
import Navbar from "../../components/landing/Navbar";
import Content from "../../components/landing/notFound/Content";

const NotFound = () => {
  return (
    <div>
      <div className="absolute">
        <Navbar />
      </div>
      <Content />
    </div>
  );
};

export default NotFound;
