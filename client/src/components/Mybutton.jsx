import React from "react";

const Mybutton = (props) => {
  return (
    <button
      className={`border-[1px] border-slate-300 rounded-md py-2 px-4 m-2 text-sm font-semibold ${props.style} text-xs`}
    >
      {props.children}
    </button>
  );
};

export default Mybutton;
