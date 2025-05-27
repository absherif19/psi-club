import React from "react";
import { FiCopy } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const MainInfo = ({ name, status }) => {
  const statusColors = {
    open: "text-green-500 bg-green-100",
    closed: "text-red-500 bg-red-100",
  };

  return (
    <div className="flex justify-between items-end gap-6 p-4 ">
      {/* Left: Basic Info */}
      <div className="flex gap-4 items-start">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full" />
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-[#272963]">{name}</h2>

          <div className="flex items-center gap-1 text-sm text-[#1E222E]">
            <span className="text-[#E35F27] font-medium">Buyer</span>
            <span className="text-[#67748E]">34567890</span>
            <button className="text-[#1E222E] hover:text-[#171827]">
              <FiCopy size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between gap-4">
        {/* Lead Status */}
        <div className="text-center items-center flex gap-4">
          <p className="text-sm text-[#828282] mb-1">Lead Status</p>
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-medium ${
              statusColors[status.toLowerCase()]
            }`}
          >
            {status}
          </span>
        </div>

        {/* Complete Percentage */}
        <div className="text-center flex gap-4 items-center">
          <p className="text-sm text-[#828282] mb-1">Complete percentage</p>
          <div className="w-12 h-12 mx-auto">
            <CircularProgressbar
              value={17}
              text="17%"
              strokeWidth={12}
              styles={buildStyles({
                pathColor: "#F57C2E",
                textColor: "#F57C2E",
                trailColor: "#FEE9DD",
                textSize: "26px",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
