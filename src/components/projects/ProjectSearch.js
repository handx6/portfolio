import React from 'react'
import { FiSearch } from "react-icons/fi";

export default function ProjectSearch({setSearchProject}) {
  return (
    <div className="flex justify-between gap-2">
      <span className="hidden sm:block bg-[#F7F8FC] p-2.5 shadow-sm rounded-xl cursor-pointer">
        <FiSearch className="text-[#1E3851] w-5 h-5"></FiSearch>
      </span>
      <input
        onChange={(e) => {
          setSearchProject(e.target.value);
        }}
        className="font-normal pl-3 pr-1 sm:px-4 py-2 border border-gray-200 rounded-lg text-sm sm:text-md bg-white text-[#0D2438]"
        id="name"
        name="name"
        type="search"
        required=""
        placeholder="Search Projects"
      />
    </div>
  );
}
