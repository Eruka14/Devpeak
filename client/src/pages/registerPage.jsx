import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import usePasswordToggle from "../hooks/usePasswordToggle";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  // Нууц үг нуух болон харах icon
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  // Хэрэглэгчийн мэдээллийг хадгалах төлөв
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  // Алдааний мэдээллийг хадгалах төлөв
  const [Err, setErr] = useState(null);
  // Хэрэглэгчийн оруулсан мэдээллийг төлөврүү дамжуулах функц
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Хэрэглэгчийн оруулсан мэдээллийг өгөгдлийн санруу дамжуулах
  const handleClick = async (e) => {
    // e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register", Inputs);
      setInputs({ username: "", email: "", password: "" });
    } catch (Err) {
      setErr(Err.response.data);
    }
  };
  console.log(Err);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form action="">
          <div className="bg-white px-6 pt-4 pb-4 rounded-md w-[300px] drop-shadow-md">
            {/* Гарчиг */}
            <h1 className="text-2xl text-center mb-4 font-medium text-gray-700">
              Бүртгүүлэх
            </h1>
            {/* Хэрэглэгчийн нэрний input */}
            <div className="my-3">
              <label htmlFor="username" className="block pb-1">
                Нэр
              </label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                className="border border-slate-300 rounded-md w-[100%] h-8 pl-2"
                required
              />{" "}
            </div>
            {/* Хэрэглэгчийн и-мэйл input */}
            <div className="my-3">
              <label htmlFor="email" className="block pb-1">
                И-мэйл
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="border border-slate-300 rounded-md w-[100%] h-8 pl-2"
                required
              />{" "}
            </div>
            {/* Хэрэглэгчийн нууц үг input */}
            <div>
              <label htmlFor="password" className="block pb-1">
                Нууц үг
              </label>
              <div className="flex justify-end">
                <input
                  type={PasswordInputType}
                  name="password"
                  onChange={handleChange}
                  className="border border-slate-300 rounded-md w-[100%] h-8 pl-2"
                  required
                />
                {/* hide / reveal icon button */}
                <span className="absolute z-50 cursor-pointer mt-2 mr-2">
                  {ToggleIcon}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="block w-[95%] bg-green-600 rounded-md py-1 mt-6 font-bold text-white mb-2 hover:bg-green-500 ease-in-out duration-300"
                onClick={handleClick}
              >
                Бүртгүүлэх
              </button>
            </div>
            <div className="w-[90%] pt-2 m-auto">
              <hr />
            </div>
            {/* back end-с илгээсэн алдааг харуулах */}
            {Err && (
              <p className="text-center text-sm text-red-600 mt-3">{Err}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
