import React from "react";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import avatar from "../../assets/avatar.png";
import bojana from "../../assets/bojana.png";

const statusColors = {
  open: "text-green-500 bg-green-100",
  closed: "text-red-500 bg-red-100",
};

const ReferralCard = ({ data }) => {
  const {
    id,
    date,
    agent,
    name,
    phone,
    email,
    status,
    activeStageIndex,
    stages,
  } = data;

  const navigate = useNavigate();

return (
  <div className="bg-white rounded-xl shadow-normal border border-gray-100 p-4 space-y-3 w-full">
    {/* Top Row: Avatar, Date, Name, Status */}
    <div className="flex justify-between items-start">
      <div className="flex gap-4 items-start">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full" />
        <div>
          <p className="text-sm text-[#A0AEC0]">{date}</p>
          <h2 className="text-lg font-bold text-[#1E1F4B] leading-tight">
            {name}
          </h2>

        </div>
      </div>

<span
  className={`px-3 py-1 rounded-full text-xs font-medium ${
    statusColors[status.toLowerCase()]
  }`}
>
  {status}
</span>

    </div>
              <div className="text-sm text-[#4A5568] flex items-center gap-1">
            <span className="text-[#E35F27] font-semibold">Buyer</span>
            <span>34567890</span>
            <button type="button" className="text-[#272963] hover:text-[#1E222E]">
              <FiCopy size={14} />
            </button>
          </div>

    {/* Email + Phone + Circular Progress */}
    <div className="flex justify-between items-center">
      <div>
        
        <p className="text-base text-[#546077] font-medium">{email}</p>
        <p className="text-base text-[#546077] font-medium">{phone}</p>
      </div>

      <div className="w-10 h-10">
        <CircularProgressbar
          value={17}
          text="17%"
          strokeWidth={12}
          styles={buildStyles({
            pathColor: "#F57C2E",
            textColor: "#F57C2E",
            trailColor: "#FEE9DD",
            textSize: "28px",
          })}
        />
      </div>
    </div>

    {/* Assign to Section */}
    <div>
      <p className="text-xs text-[#A0AEC0] mb-1">Assign to</p>
      <div className="flex items-center gap-2">
        <img src={bojana} alt={agent} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold text-[#1E1F4B]">{agent}</p>
          <p className="text-xs text-[#A0AEC0]">Agent</p>
        </div>
      </div>
    </div>

    {/* Stage Tracker and Button */}
    <div className="flex justify-between items-end pt-3">
      {/* Vertical Tracker */}
      <div className="flex gap-2">
        <div className="relative w-1 h-[70px]">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-0 w-1 rounded-full ${
              activeStageIndex === 0
                ? "bg-[#E35F27] h-1/3"
                : activeStageIndex === 1
                ? "bg-[#00A664] h-2/3"
                : activeStageIndex === 2
                ? "bg-blue-500 h-full"
                : ""
            }`}
          />
        </div>

        <div className="space-y-[10px]">
          {stages.map((stage, idx) => {
            let colorClass = "text-[#1E222E]";
            if (activeStageIndex === 0 && idx === 0)
              colorClass = "text-[#E35F27] font-semibold";
            else if (activeStageIndex === 1 && idx <= 1)
              colorClass = "text-[#00A664]";
            else if (activeStageIndex === 2)
              colorClass = "text-blue-500";

            return (
              <p key={idx} className={`text-xs ${colorClass}`}>
                {stage.label}
              </p>
            );
          })}
        </div>
      </div>

      <button
        onClick={() =>
          navigate(`/referral/${id}`, {
            state: data,
          })
        }
        className="bg-[#E35F27] text-white text-sm px-4 py-1.5 rounded-md"
      >
        More Info
      </button>
    </div>
  </div>
);
};

export default ReferralCard;
