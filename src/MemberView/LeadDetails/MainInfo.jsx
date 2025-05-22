import React from "react";
import { FiCopy } from "react-icons/fi";

const MainInfo = ({ date, name, buyerId, activeStageIndex, stages = [] }) => {
  return (
    <div className="flex justify-between items-start gap-6 p-4 ">
      {/* Left: Basic Info */}
      <div className="space-y-1">
        <p className="text-sm text-[#A0AEC0]">{date}</p>
        <h2 className="text-lg font-semibold text-[#1E222E]">{name}</h2>

        <div className="flex items-center gap-1 text-sm text-[#1E222E]">
          <span className="text-[#E35F27] font-medium">Buyer</span>
          <span className="text-[#67748E]">{buyerId}</span>
          <button className="text-[#1E222E] hover:text-[#171827]">
            <FiCopy size={14} />
          </button>
        </div>
      </div>

      {/* Right: Vertical Stage Tracker */}
      <div className="flex gap-2">
        {/* Line */}
        <div className="relative w-1 h-[60px]">
          {/* Background line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 rounded-full" />
          {/* Colored progress */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-0 w-1 rounded-full ${
              activeStageIndex === 0
                ? "bg-[#E35F27] h-1/3"
                : activeStageIndex === 1
                ? "bg-blue-500 h-2/3"
                : activeStageIndex === 2
                ? "bg-green-500 h-full"
                : ""
            }`}
          />
        </div>

        {/* Labels */}
        <div className="space-y-[6px]">
          {stages.map((stage, idx) => {
            const color =
              idx === 0 && activeStageIndex >= 0
                ? "text-[#E35F27]"
                : idx === 1 && activeStageIndex >= 1
                ? "text-blue-600"
                : idx === 2 && activeStageIndex >= 2
                ? "text-green-600"
                : "text-[#1E222E]";
            return (
              <p key={idx} className={`text-xs ${color}`}>
                {stage.label}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
