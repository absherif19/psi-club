import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import BackButton from "./../../Reuse/BackButton";
import UseableHeader from "../../Reuse/UseableHeader";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4">
      {/* Left side: Back + Title */}
      <UseableHeader>Membership Requests</UseableHeader>

      {/* Right side: Search + Filter */}
      <div className="flex items-center">
        <div className="flex items-center border rounded-md bg-white overflow-hidden">
          <span className="px-3 text-gray-400">
            <FiSearch className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search by name"
            className="px-2 py-1 text-sm focus:outline-none"
          />
        </div>
        <button className="ml-2 bg-[#272963] text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm hover:opacity-90">
          <FiFilter className="w-4 h-4" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default Header;
