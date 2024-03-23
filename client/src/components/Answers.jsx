import React, { useContext } from "react";
import myPro from "../assets/myProfile.png";
import userPro from "../assets/defaultUser.png";
import { HiDotsVertical } from "react-icons/hi";
import { AuthContext } from "../context/authContext";
import Mybutton from "./Mybutton";

const Answers = () => {
  //   const { currentUser } = useContext(AuthContext);
  const answers = [
    {
      id: 1,
      username: "Fyodor",
      image: `${myPro}`,
      user_id: 1,
      title: "Энэ reactjs component дээр алдаа гараад байх юм яах вээ?",
      desc: `import hiihde buruu import hiisen baina. Reactjs 17 deer ingej import hiihiig boluilsan`,
      created_date: "few moments ago",
    },
    {
      id: 2,
      username: "Boldoo",
      image: `${userPro}`,
      user_id: 1,
      title: "Энэ reactjs component дээр алдаа гараад байх юм яах вээ?",
      desc: `import myPro from "../assets/myProfile.png";import myPro from "../assets/myProfile.png";import myPro from "../assets/myProfile.png";import myPro from "../assets/myProfile.png";`,
      created_date: "few moments ago",
    },
  ];
  return (
    <div className="flex-col">
      <div className="flex items-center mt-5">
        <img
          src={myPro}
          alt="Profile picture"
          className="w-8 h-8 rounded-full"
        />
        <textarea
          type="text"
          placeholder="Хариулт..."
          onScroll={true}
          className="w-[80%] ml-3 border p-1 rounded-md pl-3 resize-y h-9 max-h-20 min-h-9 focus:outline-none transition ease-in-out focus:border-blue-400 focus:border-2 focus:duration-200"
        />
        <Mybutton style="bg-green-600 rounded-md py-1 font-semibold text-white mb-2 hover:bg-green-500 ease-in-out duration-300">
          Нийтлэх
        </Mybutton>
      </div>
      {answers.map((answer) => (
        <div className="w-full bg-white p-2 mt-2 ml-1">
          <div className="flex items-center justify-between">
            <div className="flex">
              <img
                src={answer.image}
                alt="profile image"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-md font-semibold ml-2">{answer.username}</p>
            </div>
            <div className="cursor-pointer">
              <HiDotsVertical />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="min-w-[75%] max-w-[75%] ml-9 rounded-sm">
              {answer.desc}
            </p>
            <p className="flex items-center text-[10px] text-gray-400 font-semibold mr-5">
              {answer.created_date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answers;
