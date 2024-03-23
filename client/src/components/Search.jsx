import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`max-w-[50%] min-w-[50%] flex items-center bg-slate-100 rounded-md px-2 focus-within:ring-2 focus-within:ring-blue-400 ease-in-out duration-200 ${
        isFocused ? "ring-2 ring-blue-400" : ""
      }`}
    >
      <IoSearch className="text-2xl text-slate-400 mr-2" />
      <input
        type="search"
        className="flex-grow p-2 bg-transparent focus:outline-none"
        placeholder="Хайх..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;
