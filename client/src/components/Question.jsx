import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdQuestionAnswer } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { TbPointerCode } from "react-icons/tb";
import { Link } from "react-router-dom";
import Answers from "./Answers";
import moment from "../mongolianLocale";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Question = ({ question }) => {
  const Up = true;
  const [openAnswers, setOpenAnswers] = useState(false);

  return (
    <div className="bg-white border rounded-md shadow-md p-4">
      {/* username, image, dots */}
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Link to={`/profile/:${question.user_id}`}>
            <img
              src={question.image}
              alt="Нүүр зураг"
              className="w-9 h-9 rounded-full"
            />
          </Link>
          <div className="">
            <p className="font-semibold">{question.username}</p>
            <p className="text-[10px] text-slate-500 font-semibold">
              {moment(question.created_date).fromNow()}
            </p>
          </div>
        </div>
        <div className="cursor-pointer mt-3">
          <HiDotsVertical />
        </div>
      </div>
      {/* title */}
      <div className="mt-3 font-semibold">{question.title}</div>
      <div className="mt-3  rounded-sm p-2 overflow-x-auto overflow-y-auto max-h-96 max-w-2xl">
        <Markdown
          children={question.desc}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={oneDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
      {/* like, answers */}
      <div className="mt-4">
        <hr />
      </div>
      <div className="flex gap-20 mx-5 mt-4">
        <div className="flex items-center cursor-pointer ">
          {Up ? <HiOutlineLightningBolt /> : <HiLightningBolt />}
          <p className="ml-2 font-semibold"></p>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpenAnswers(!openAnswers)}
        >
          <MdOutlineQuestionAnswer />
          <p className="ml-2 font-semibold"></p>
        </div>
      </div>
      {openAnswers && <Answers question_id={question.id} />}
    </div>
  );
};

const Component = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default Question;
