import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import HomeNavbar from "../components/HomeNavbar";
import CreateQuestion from "../components/CreateQuestion";
import Questions from "../components/Questions";

const HomePage = () => {
  // const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg-slate-50">
      <HomeNavbar />
      <CreateQuestion />
      <hr className="my-3 mt-4 w-[40%] mx-auto" />
      <div>
        <Questions />
      </div>
    </div>
  );
};

export default HomePage;
