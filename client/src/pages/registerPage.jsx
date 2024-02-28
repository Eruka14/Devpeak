import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePasswordToggle from "../hooks/usePasswordToggle";

const LoginPage = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form action="">
        <div className="bg-white px-6 pt-4 pb-4 rounded-md w-[300px] drop-shadow-md">
          <h1 className="text-2xl text-center mb-4 font-medium text-gray-700">
            Бүртгүүлэх
          </h1>
          <div className="my-3">
            <label htmlFor="username" className="block pb-1">
              Нэр
            </label>
            <input
              type="username"
              id="username"
              onChange={handleChange}
              className="border border-slate-300 rounded-md w-[100%] h-8 pl-2"
            />{" "}
          </div>
          <div className="my-3">
            <label htmlFor="email" className="block pb-1">
              И-мэйл
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="border border-slate-300 rounded-md w-[100%] h-8 pl-2"
            />{" "}
          </div>
          <div>
            <label htmlFor="password" className="block pb-1">
              Нууц үг
            </label>
            <input
              type={PasswordInputType}
              id="password"
              onChange={handleChange}
              className="border border-slate-300 rounded-md w-[100%] h-8 pl-2"
            />
            <span className="absolute bottom-24 right-8 z-50 cursor-pointer">
              {ToggleIcon}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="block w-[95%] bg-green-600 rounded-md py-1 mt-6 font-bold text-white mb-2 hover:bg-green-500"
            >
              Бүртгүүлэх
            </button>
          </div>
          <div className="w-[90%] pt-2 m-auto">
            <hr />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
