import React from "react";
import myPro from "../assets/myProfile.png";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateQuestion = () => {
  return (
    <div className="flex items-center max-w-2xl mx-auto mt-4 rounded-md h-10 gap-3">
      <div className="flex border pl-2 pr-1 py-1 rounded-md max-w-[40%] justify-between gap-6 shadow bg-white">
        <img src={myPro} alt="myProfile" className=" rounded-full h-9 w-9 " />
        <Link to="/addquestion">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaPlus />
            <button className="px-2 bg-green-600 p-2 rounded-md text-white text-sm hover:bg-green-500 ease-in-out duration-300 font-medium">
              Асуулт үүсгэх
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateQuestion;
