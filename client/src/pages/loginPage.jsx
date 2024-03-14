import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePasswordToggle from "../hooks/usePasswordToggle";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  // Алдааны мэдээлэл хадгалах төлөв
  const [Err, setErr] = useState(null);
  // Хэрэглэгчийн оруулсан мэдээллийг хадгалах төлөв
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  // Хэрэглэгчийн оруулсан мэдээллийг төлөврүү дамжуулах
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form action="">
          <div className="bg-white px-6 pt-4 pb-4 rounded-md w-[300px] drop-shadow-md">
            {/* Гарчиг */}
            <h1 className="text-2xl text-center mb-4 font-medium text-gray-700">
              Нэвтрэх
            </h1>
            {/* Хэрэглэгчийн и-мэйл input */}
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
            {/* Хэрэглэгчийн нууц үг оруулах хэсэг */}
            <div>
              <label htmlFor="password" className="block pb-1">
                Нууц үг
              </label>
              <div className="flex justify-end">
                <input
                  type={PasswordInputType}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md w-[100%] h-8 pl-2"
                />
                <span className="absolute mt-2 mr-2 z-50 cursor-pointer">
                  {ToggleIcon}
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="block w-[95%] bg-green-600 rounded-md py-1 mt-6 font-bold text-white mb-2 hover:bg-green-500 ease-in-out duration-300"
              >
                Нэвтрэх
              </button>
            </div>
            <div className="w-[90%] pt-2 m-auto">
              <hr />
            </div>
            {/* Алдаа харуулах хэсэг */}
            {Err && (
              <p className="text-center text-sm text-red-600 mt-3">{Err}</p>
            )}
          </div>
          <div className="bg-white px-6 pt-4 pb-4 rounded-md w-[300px] drop-shadow-md mt-3">
            <p className="text-sm text-center">
              Шинэ хэрэглэгч бол -{" "}
              <Link to="/register">
                <span className="text-blue-800 font-medium hover:text-blue-500 ">
                  Бүртгэл үүсгэх
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
