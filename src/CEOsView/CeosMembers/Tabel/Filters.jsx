import React, { useState } from "react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";

const Filters = () => {
  const [selectedName, setSelectedName] = useState("Feras Abu Laila");
  const [search, setSearch] = useState("");

  const people = ["Feras Abu Laila", "Neven", "Yassen", "Amer Amer"];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 w-full">
    <div className="flex items-center gap-2 relative w-fit">
      <span className="text-sm text-[#1C2C5B]">Connections by</span>

      <div className="relative">
        <select
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          className="appearance-none bg-[#1C2C5B] text-white px-4 py-2 pr-8 rounded-md text-sm focus:outline-none"
        >
          {people.map((person) => (
            <option key={person} value={person}>
              {person}
            </option>
          ))}
        </select>

        {/* Custom arrow */}
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
      </div>
    </div>

    <div className="flex w-full space-x-2 max-w-md">
      {/* Search input with icon */}
      <div className="flex items-center px-3 bg-white border border-gray-300 rounded-md w-full">
        <FiSearch className="text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-2 py-2 text-sm text-gray-700 focus:outline-none"
        />
      </div>

      {/* Filter button */}
      <button className="bg-[#1C2C5B] text-white px-4 py-2.5 rounded-md flex items-center text-sm font-medium">
        <FiFilter className="mr-2 w-5 h-5" />
        Filter
      </button>
    </div>
    </div>
  );
};

export default Filters;
