/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/admin/Navbar";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaXmark } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";

const UserManagement = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
  });
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.username);
        getUsers(token); // get token user
      } catch (error) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
    const updateTime = () => setLastUpdated(new Date());
    updateTime();
  }, []);

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
    //function get user yang dimana harus menerima token dan sekaligus untuk filter data
    try {
      const response = await axiosJWT.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const usersArray = Array.isArray(response.data)
        ? response.data
        : [response.data];
      setUsers(usersArray);
      setFilteredUsers(usersArray);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const handleSearch = () => {
    setFilteredUsers(
      users.filter((user) =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddUser = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setShowForm(false);
    // Reset form setelah submit
    setNewUser({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      gender: "",
    });
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const togleAction = () => {
    setIsOpenAction(!isOpenAction);
  };

  const formatDate = (date) => {
    const options = {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleString(undefined, options);
  };

  return (
    <>
      <div className="fixed w-full z-10 top-0">
        <Navbar />
      </div>
      <div className="container mx-auto mt-20 px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-2/3">
            <h1 className="text-lg text-center md:text-2xl lg:text-left font-bold my-6">
              User Management
            </h1>
            <div className="flex flex-row justify-between  md:flex-row md:justify-between">
              <div className="relative mb-4 md:mb-0">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                  <FiSearch
                    onClick={handleSearch}
                    className="text-gray-500 w-5 h-5"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search user management"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  className="w-full md:w-64 lg:w-80 h-10 bg-slate-200 text-sm text-gray-700 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <button
                className="bg-blue-500 text-sm text-white font-bold px-2 md:py-2 md:px-4md:text-base md:-mr-0 lg:-mr-[500px] hover:bg-blue-700 rounded-lg"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          {/* table */}
          <table className="w-full divide-y-8 divide-white">
            <thead className="bg-slate-200 text-xs md:text-sm lg:text-base">
              <tr>
                <th className="px-4 py-2 text-left font-semibold tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 text-left font-semibold tracking-wider">
                  Username
                </th>
                <th className="px-4 py-2 text-left font-semibold tracking-wider">
                  Email
                </th>
                <th className="px-4 py-2 text-left font-semibold tracking-wider">
                  Gender
                </th>
                <th className="px-4 py-2 text-left font-semibold tracking-wider">
                  Last Update
                </th>
                <th className="px-4 py-2 text-left font-semibold tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-200 text-xs md:text-sm lg:text-base divide-y-8 divide-white">
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-left font-semibold tracking-wider mt-4">
                    <div className="flex items-center">
                      <img
                        src={user.image}
                        alt="UserImage"
                        className="w-6 h-6 rounded-full mr-2 md:w-8 md:h-8"
                      />
                      {`${user.firstName} ${user.lastName}`}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-left font-semibold tracking-wider">
                    {user.username}
                  </td>
                  <td className="px-4 py-2 text-left font-semibold tracking-wider">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 text-left font-semibold tracking-wider">
                    {user.gender}
                  </td>
                  <td className="px-4 py-2 text-left font-semibold tracking-wider">
                    {formatDate(lastUpdated)}
                  </td>
                  <td className="px-4 py-2 text-left font-semibold tracking-wider">
                    <div className="flex flex-row space-x-4 ">
                      <FaEllipsisH
                        className="cursor-pointer"
                        onClick={togleAction}
                      />
                      <div className="flex justify-start">
                        {isOpenAction && (
                          <div className="absolute flex flex-col gap-1 p-3 bg-black rounded-xl bg-opacity-50 backdrop-blur-sm">
                            <button className="bg-blue-500 text-white text-sm px-4 rounded-2xl">
                              Edit
                            </button>
                            <button className="bg-red-500 text-white text-sm px-4 rounded-2xl">
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Form Input */}
        <div className="flex items-center justify-center">
          {showForm && (
            <div className="flex items-center justify-center">
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50  overflow-scroll">
                <form
                  className="m-6 p-6 mt-56 w-full max-w-md bg-white rounded-lg shadow-md border-2 border-blue-500"
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-3xl cursor-pointer"
                      onClick={handleCloseForm}
                    >
                      <FaXmark />
                    </button>
                  </div>
                  <div className="flex justify-start mb-4">
                    <div className="text-start">
                      <h1 className="text-2xl md:text-3xl font-medium text-[#44566C]">
                        User Management
                      </h1>
                      <p className="text-sm md:text-base text-[#8697A8]">
                        If you need more info, please check Project Guidelines.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={newUser.firstName}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={newUser.lastName}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={newUser.username}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Gender</label>
                      <select
                        name="gender"
                        value={newUser.gender}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border rounded-lg"
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      type="button"
                      onClick={handleCloseForm}
                      className="mt-4 border-2 text-black font-bold py-2 px-4 rounded-lg hover:bg-red-700 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserManagement;
