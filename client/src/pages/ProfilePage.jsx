import React, { useContext } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { AuthContext } from "../context/authContext";
import myPro from "../assets/myProfile.png";
import { FaRegEdit } from "react-icons/fa";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-slate-50">
      <HomeNavbar />
      <div className="flex-col w-[35%] justify-center mx-auto mt-10 bg-white py-4 px-3 shadow-md rounded-md">
        <div className="relative">
          <div className="flex justify-center">
            <img
              src={currentUser.image}
              alt="Profile picture"
              className="w-28 h-28 rounded-full border-4 border-slate-500 mt-5"
            />
          </div>
          <div className="absolute right-6 top-5 cursor-pointer w-3 h-3">
            <FaRegEdit className="text-xl" />
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <h1 className="text-3xl font-semibold">{currentUser.username}</h1>
        </div>
        <div className="flex justify-center mt-4 text-slate-500">
          <div className="">Намтар :</div> <br />
        </div>
        <div className="my-3">
          <p className="text-center">{currentUser.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
