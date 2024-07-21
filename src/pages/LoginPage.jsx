import React, { useState } from "react";
import image1 from "../img/image1.png";
import logo from "../img/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/auth/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token, refreshToken } = response.data;
      // Simpan token dan refreshToken di cookies
      Cookies.set("token", token, { expires: 1 }); // Simpan token selama 1 hari
      Cookies.set("refreshToken", refreshToken, { expires: 1 }); // Simpan refreshToken selama 1 hari

      // Redirect ke halaman setelah login sukses
      navigate("/datasource");
    } catch (error) {
      if (error.response) {
        setMsg("Invalid username or password");
      } else {
        setMsg("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div className="absolute hidden md:block lg:block top-0 left-0 m-4 md:m-10">
        <img
          src={logo}
          alt="logo"
          className="w-24 h-auto md:w-auto md:h-auto"
        />
      </div>
      <div className="w-full hidden md:flex md:w-1/3 bg-cover bg-center bg-slate-200 lg:flex flex-col items-center justify-center">
        <img
          src={image1}
          className="object-center w-3/4 md:w-auto"
          alt="service"
        />
        <h1 className="font-bold text-2xl md:text-3xl mt-10 md:mt-20">
          Services
        </h1>
        <p className="text-center w-3/4 md:w-auto mt-4 md:mt-0">
          An expert team help you to analyze your political power. An expert
          team.
        </p>
      </div>
      <div className="flex flex-col mt-10 justify-center items-center w-full md:w-2/3 p-4 md:-mt-10 md:p-0 lg:-mt-10">
        <form onSubmit={Auth} className="w-full max-w-md">
          {msg && <p className="text-red-500">{msg}</p>}
          <h1 className="font-bold text-2xl md:text-3xl">
            Welcome to Login Ipsum
          </h1>
          <div className="flex flex-row mt-2">
            <p>Don't have an account? </p>
            <a
              className="ml-1 font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/register"
            >
              Sign Up
            </a>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-5">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center mt-3">
            <input type="checkbox" className="mr-2" />
            <p className="text-xs text-gray-400 font-bold">Remember Me</p>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-3 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
