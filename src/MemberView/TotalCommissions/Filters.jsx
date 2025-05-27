import React from 'react'
import { FiSearch, FiFilter  } from "react-icons/fi";

// Filters.tsx
const Filters = ({ currentTab, setCurrentTab }) => {
  const tabs = ["All", "Paid", "In Progress"];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`w-[140px] h-[50px] py-2 px-4 text-start rounded-md text-sm font-medium ${
              currentTab === tab ? "bg-[#E35F27] text-white" : "border border-[#979797] text-[#979797]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
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
</button>      </div>
    </div>
  );
};

export default Filters
