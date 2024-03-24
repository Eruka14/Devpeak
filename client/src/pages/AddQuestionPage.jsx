import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Mybutton from "../components/Mybutton";
import Tiptap from "../components/Tiptap";
import parse from "html-react-parser";
import "../components/style.css";

const AddQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  console.log(title);
  console.log("desc : " + desc);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <HomeNavbar />
      <div className="bg-white max-w-2xl mx-auto border p-2 rounded-md mt-10 shadow-md">
        <div>
          <input
            type="text"
            placeholder="Гарчиг"
            className="border p-2 my-2 w-[100%] rounded-md focus:outline-none transition ease-in-out focus:border-blue-400 focus:border-2 focus:duration-100"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="">
          {/* <textarea
            onChange={handleChange}
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Нэмэлт мэдээлэл"
            className="border w-[100%] p-2 rounded-md focus:outline-none transition ease-in-out focus:border-blue-400 focus:border-2 focus:duration-100"
          ></textarea> */}
          <Tiptap setDescription={setDesc} />
        </div>
        <div>
          <Mybutton style="w-[15%] bg-green-600 rounded-md py-1 text-white mb-2 hover:bg-green-500 ease-in-out duration-300 text-[15px] font-semibold">
            Нийтлэх
          </Mybutton>
        </div>
      </div>
      <span>{parse(desc)}</span>
    </div>
  );
};

export default AddQuestionPage;
