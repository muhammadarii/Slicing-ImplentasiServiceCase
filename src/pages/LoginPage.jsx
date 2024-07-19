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
    <div className="relative flex h-screen">
      <div className="absolute top-0 left-0 m-10">
        <img src={logo} alt="" className="w-auto h-auto" />
      </div>
      <div className="w-1/3 bg-cover bg-center bg-slate-200 flex flex-col items-center justify-center">
        <img src={image1} className="object-center" alt="" />
        <h1 className="font-bold text-3xl mt-20">Services</h1>
        <p className="w-96 text-center">
          An expert team help you to analyze your polticalt power. An expret
          team .
        </p>
      </div>
      <div className="flex justify-center min-h-screen items-center flex-col w-3/4">
        <form onSubmit={Auth}>
          {msg && <p className="text-red-500">{msg}</p>}
          <h1 className="font-bold text-3xl">Welcome to Login ipsum</h1>
          <div className="flex flex-row">
            <p>Dont' have an account? </p>
            <a
              className="mt-0.5 ml-1 font-bold text-sm text-blue-500 hover:text-blue-800"
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
          <div className="flex gap-2 mt-3">
            <input type="checkbox" />
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
