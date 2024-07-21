import React from "react";
// import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";
import ContentOne from "../../components/admin/ContentOne";

const Dashboard = () => {
  return (
    <div className="flex flex-col ">
      <div className="absolute flex flex-row w-full mt-20">
        <ContentOne />
      </div>
      <div className="w-full">
        <div className="w-screen ">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
