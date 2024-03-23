import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Mybutton from "../components/Mybutton";

const AddQuestionPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <HomeNavbar />
      <div className="bg-white max-w-2xl mx-auto border p-2 rounded-md mt-10 shadow-md">
        <div>
          <input
            type="text"
            placeholder="Гарчиг"
            className="border p-2 my-2 w-[100%] rounded-md focus:outline-none transition ease-in-out focus:border-blue-400 focus:border-2 focus:duration-100"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Нэмэлт мэдээлэл"
            className="border w-[100%] p-2 rounded-md focus:outline-none transition ease-in-out focus:border-blue-400 focus:border-2 focus:duration-100"
          ></textarea>
        </div>
        <div>
          <Mybutton style="w-[15%] bg-green-600 rounded-md py-1 text-white mb-2 hover:bg-green-500 ease-in-out duration-300 text-[15px] font-semibold">
            Нийтлэх
          </Mybutton>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionPage;
