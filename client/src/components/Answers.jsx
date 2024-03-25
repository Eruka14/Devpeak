import React, { useContext, useState } from "react";
import { makeRequest } from "../axios";
import { HiDotsVertical } from "react-icons/hi";
import { AuthContext } from "../context/authContext";
import Mybutton from "./Mybutton";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "../mongolianLocale";

const Answers = ({ question_id }) => {
  const { currentUser } = useContext(AuthContext);
  const [answerDesc, setAnswerDesc] = useState("");
  const { isLoading, error, data } = useQuery({
    queryKey: ["answers"],
    queryFn: () =>
      makeRequest.get("/answers?question_id=" + question_id).then((res) => {
        return res.data;
      }),
  });

  moment.locale("mn");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newAnswer) => {
      return makeRequest.post("/answers", newAnswer);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["answers"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc: answerDesc, question_id });
    setAnswerDesc("");
  };

  return (
    <div className="flex-col">
      <div className="flex items-center mt-5">
        <img
          src={currentUser.image}
          alt="Profile picture"
          className="w-8 h-8 rounded-full"
        />
        <textarea
          type="text"
          name="desc"
          value={answerDesc}
          placeholder="Хариулт..."
          className="w-[80%] ml-3 border p-1 rounded-md pl-3 resize-y h-9 max-h-20 min-h-9 focus:outline-none transition ease-in-out focus:border-blue-400 focus:border-2 focus:duration-200"
          onChange={(e) => setAnswerDesc(e.target.value)}
        />
        <Mybutton
          style="bg-green-600 rounded-md py-1 font-semibold text-white mb-2 hover:bg-green-500 ease-in-out duration-300"
          onClick={handleClick}
        >
          Нийтлэх
        </Mybutton>
      </div>
      {isLoading
        ? "Уншиж байна..."
        : data.map((answer) => (
            <div className="w-full bg-white p-2 mt-2 ml-1" key={answer.id}>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <img
                    src={answer.image}
                    alt="profile image"
                    className="w-7 h-7 rounded-full"
                  />
                  <p className="text-md font-semibold ml-2">
                    {answer.username}
                  </p>
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
                  {moment(answer.created_date).fromNow()}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Answers;
