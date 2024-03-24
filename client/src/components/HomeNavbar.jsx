import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import Search from "./Search";
import DevpeakLogo from "../assets/Logo.png";
import DefaultUser from "../assets/defaultUser.png";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import Mypro from "../assets/myProfile.png";
import { AuthContext } from "../context/authContext";

const HomeNavbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="border-b-[1px] border-slate-200 w-full top-0 sticky bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-14 justify-between">
        <Link to="/home">
          <h1 className="text-lg font-bold sm:text-2xl px-2 sm:px-0 cursor-pointer flex">
            <img
              src={DevpeakLogo}
              alt="Devpeak logo"
              width={40}
              className="mr-2"
            />{" "}
            Devpeak
          </h1>
        </Link>
        <Search />
        <div className="flex items-center">
          <div className="mr-10 cursor-pointer hover:bg-slate-200 rounded-md p-2">
            <FaBell />
          </div>
          <Link to={`/profile/${currentUser.id}`}>
            <div className="flex border px-3 py-1 rounded-md cursor-pointer hover:bg-slate-300">
              <img
                src={currentUser.image}
                alt="User"
                className="rounded-full h-7 w-7"
              />
              <p className="ml-2 font-semibold">{currentUser.username}</p>
            </div>
          </Link>
          <div className="ml-4 cursor-pointer hover:bg-slate-200 p-2 rounded-md">
            <MdLogout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
