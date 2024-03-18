import React from "react";
import { Link } from "react-router-dom";
import Mybutton from "./Mybutton";

const Navbar = () => {
  return (
    <div className="border-b-[1px] border-slate-200 w-full">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-14 justify-between">
        <Link to="/">
          <h1 className="text-lg font-bold sm:text-2xl px-2 sm:px-0 cursor-pointer">
            Devpeak
          </h1>
        </Link>
        <div className="flex justify-end w-full sm:w-auto">
          <Link to="/login">
            {" "}
            <Mybutton style="hover:bg-slate-800 hover:text-white ease-in-out duration-300">
              Нэвтрэх
            </Mybutton>
          </Link>
          <Link to="/register">
            <Mybutton style="bg-blue-950 text-white hover:bg-blue-800 hover:text-white ease-in-out duration-300">
              Бүртгүүлэх
            </Mybutton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;