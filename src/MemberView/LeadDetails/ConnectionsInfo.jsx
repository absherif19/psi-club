import React from "react";
import bojana from "../../assets/bojana.png";

const ConnectionsInfo = ({ agentName, activeStageIndex = 1 }) => {
  const stages = [
    "Communication Stage",
    "Viewing Stage",
    "Closed Deal Or Hold",
  ];

  return (
    <div className="bg-[#F9F9F9] rounded-lg p-6 w-full">
      {/* Title */}
      <h2 className="text-[#E35F27] font-semibold text-2xl mb-8">
        Connections Info
      </h2>

      {/* Assigned agent */}
      <div className="flex items-center gap-8 mb-12">
        <p className="text-sm text-[#718096]">Assign to</p>
        <div className="flex items-center gap-2">
          <img src={bojana} alt={agentName} className="w-8 h-8 rounded-full" />
          <span className="text-sm text-[#1E1F4B] font-medium">
            {agentName}
          </span>
        </div>
      </div>

      <div className="max-w-[575px]">
        {/* Progress bar */}
        <div className="w-full  h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div
            className={`h-full bg-[#00A664] transition-all duration-300`}
            style={{
              width:
                activeStageIndex === 0
                  ? "33.33%"
                  : activeStageIndex === 1
                  ? "66.66%"
                  : "100%",
            }}
          />
        </div>

        {/* Stage labels */}
        <div className="flex justify-between text-xs font-medium text-[#00A664]">
          {stages.map((stage, index) => (
            <span
              key={index}
              className={`${
                activeStageIndex === index ? "text-[#00A664]" : "text-gray-500"
              }`}
            >
              {stage}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionsInfo;
