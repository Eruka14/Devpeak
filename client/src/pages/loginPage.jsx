import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePasswordToggle from "../hooks/usePasswordToggle";

const LoginPage = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [Inputs, setInputs] = useState({
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
            Нэвтрэх
          </h1>
          <div className="my-3">
            <label htmlFor="email" className="block pb-1">
              И-мэйл
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
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
              Нэвтрэх
            </button>
          </div>
          <div className="w-[90%] pt-2 m-auto">
            <hr />
          </div>
        </div>
        <div className="bg-white px-6 pt-4 pb-4 rounded-md w-[300px] drop-shadow-md mt-3">
          <p className="text-sm text-center">
            Шинэ хэрэглэгч бол -{" "}
            <Link to="/register">
              <span className="text-blue-800 font-medium">Бүртгэл үүсгэх</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
