import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/Navbar";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserManagement = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUsername(decoded.username);
      getUsers(token);
    } else {
      navigate("/login");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async (token) => {
    try {
      const response = await axiosJWT.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data); // Mengatur data pengguna dari respons
    } catch (error) {
      console.error("Error fetching users:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <h1 className="text-3xl font-bold m-6">User Management</h1>
          <div className="flex justify-between">
            <div className="relative ml-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiSearch className="text-gray-500 w-[20px] h-[20px] mt-1" />
              </div>
              <input
                type="text"
                placeholder="Search user management"
                className="w-[300px] h-[42px] bg-slate-200 font-normal text-[#4f5665] text-[18px] pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg -mt-2 mb-1 mr-6">
              Add User
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <table className="absolute w-[1600px] top-[250px] left-[240px] divide-y-8 divide-white">
          <thead className="bg-slate-100 text-[18px] ">
            <tr>
              <th className="px-16 py-3 text-left font-semibold tracking-wider">
                Name
              </th>
              <th className="px-16 py-3 text-left font-semibold tracking-wider">
                Username
              </th>
              <th className="px-16 py-3 text-left font-semibold tracking-wider">
                Email
              </th>
              <th className="px-16 py-3 text-left font-semibold tracking-wider">
                Gender
              </th>
              <th className="px-16 py-3 text-left font-semibold tracking-wider">
                Last Update
              </th>
              <th className="px-16 py-3 text-left font-semibold tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 divide-y-8 divide-white">
            {users.map((user) => (
              <tr>
                <td className="px-16 py-3 text-left font-semibold tracking-wider">
                  {user.firstName}
                </td>
                <td className="px-16 py-3 text-left font-semibold tracking-wider">
                  {user.username}
                </td>
                <td className="px-16 py-3 text-left font-semibold tracking-wider">
                  {user.email}
                </td>
                <td className="px-16 py-3 text-left font-semibold tracking-wider">
                  {user.gender}
                </td>
                <td className="px-16 py-3 text-left font-semibold tracking-wider">
                  {user.updatedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
