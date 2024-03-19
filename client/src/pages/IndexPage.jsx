import React from "react";
import Navbar from "../components/Navbar";
import Mybutton from "../components/Mybutton";

const indexPage = () => {
  return (
    <>
      <Navbar />
      <div className="grid text-black-800 w-[1280px] h-[95vh] items-center justify-center m-auto">
        <div className="">
          <h1 className="text-6xl font-bold text-center text-slate-700">
            <span className="bg-gradient-to-r from-purple-700 via-blue-700 to-pink-500 text-transparent bg-clip-text text-6xl font-bold">
              {" "}
              Devpeak{" "}
            </span>
            тавтай морил
          </h1>
          <h2 className="text-2xl text-center pt-5 text-slate-700 font-semibold">
            Tанд асуух асуулт байвал бүртгүүлэх хэсэг дээр дарж цааш
            үргэлжлүүлнэ үү!!!
          </h2>
          <div className="text-center pt-5">
            <Mybutton style="items-center text-[1.2rem] py-2 pb-[0.7rem] shadow-xl ease-in-out hover:bg-blue-950 hover:text-white duration-300">
              Эхлэх &rarr;
            </Mybutton>
          </div>
        </div>
        <div className="w-[900px] bg-slate-700 text-white rounded-md px-10 py-5">
          <h1 className="">Зорилго</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aliquam
          voluptatibus laboriosam! Ab deleniti explicabo velit optio quia sunt,
          dolor consequuntur molestiae itaque ut placeat quisquam vitae aperiam
          possimus eum.
        </div>
      </div>
    </>
  );
};

export default indexPage;
