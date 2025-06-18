import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <h2 className="text-[#E35F27] text-2xl font-semibold">My Leads</h2>
      <div className="flex gap-2 items-center">
        <div className="relative w-[330px]">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 pl-10 text-sm"
          />
        </div>
        <button className="bg-[#2C2D65] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
          <FiFilter className="text-white" />
          Filter
        </button>{" "}
      </div>
    </div>
  );
};

export default Header;
