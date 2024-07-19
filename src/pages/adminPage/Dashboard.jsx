import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
