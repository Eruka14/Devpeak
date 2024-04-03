import React from "react";
import Navbar from "../components/Navbar";
import Mybutton from "../components/Mybutton";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FcAbout } from "react-icons/fc";
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";

const indexPage = () => {
  return (
    <>
      <Navbar />
      <div className="grid text-black-800 w-[1280px] h-[80vh] items-center justify-center m-auto">
        <div>
          <h1 className="text-8xl font-bold text-center text-slate-700">
            <span className="bg-gradient-to-r from-purple-700 via-blue-700 to-pink-500 text-transparent bg-clip-text text-8xl font-bold">
              {" "}
              Devpeak{" "}
            </span>
            <ReactTyped
              strings={["тавтай морил"]}
              typeSpeed={130}
              backSpeed={70}
              loop
            />
          </h1>
          <h2 className="text-3xl text-center pt-7 text-slate-700 font-medium">
            Программчлалын асуулт, хариултын веб платформ
          </h2>
          <div className="flex justify-center mt-10">
            <Link to="/login">
              <Mybutton style="flex items-center justify-center py-2 px-6 ease-in-out hover:bg-blue-950 hover:text-white duration-300 font-extrabold">
                Эхлэх <FaArrowRight className="ml-2 mt-[2px]" />
              </Mybutton>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-slate-800  to-blue-900 text-white h-[50vh]">
        <div className="w-[80%] flex justify-between items-center mx-auto h-[100%]">
          <div className="w-[40%] grid gap-10">
            <h2 className="text-3xl font-bold text-slate-200 flex items-center">
              <FcAbout />
              <span className="ml-2 bg-gradient-to-r from-blue-700  to-slate-300 text-transparent bg-clip-text">
                Веб сайтын тухай
              </span>
            </h2>
            <p className="text-justify text-slate-400 text-lg">
              Программчлах явцад гарах алдаагаа Devpeak сайтаар бусадтай
              хуувалцаж хариултаа олоорой.
            </p>
          </div>
          <div className="  w-[40%] grid gap-10">
            <h2 className="text-3xl flex items-center font-bold bg-gradient-to-r from-slate-300 to-20% to-blue-700 text-transparent bg-clip-text">
              <FcApproval className="mr-2" />
              Бусад
            </h2>
            <p className="text-justify text-slate-400 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              amet eius velit, explicabo.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh]"></div>
      <Footer />
    </>
  );
};

export default indexPage;
