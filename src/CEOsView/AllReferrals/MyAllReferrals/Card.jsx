import React from "react";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const statusColors = {
  open: "text-green-500 bg-green-100",
  closed: "text-red-500 bg-red-100",
};

const ReferralCard = ({ data }) => {
  const {
    id,
    date,
    name,
    phone,
    email,
    budget,
    type,
    location,
    added,
    status,
    activeStageIndex,
    stages,
  } = data;

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-2 w-full">
      {/* Top section */}
      <div className="flex justify-between text-sm text-[#A0AEC0]">
        <span>{date}</span>
        <span
          className={`px-4 py-2 rounded-full text-xs font-medium ${
            statusColors[status.toLowerCase()]
          }`}
        >
          {status}
        </span>
      </div>

      {/* Name and Contact */}
      <div className="text-[#272963] text-2xl font-medium">{name}</div>

      <div className="text-sm space-y-2 mb-2">
        {/* Buyer and Copy Row */}
        <div className="flex items-center gap-1 text-[#4A5568]">
          <span className="text-[#E35F27] font-medium">Buyer</span>
          <span>34567890</span>
          <button type="button" className="text-[#272963] hover:text-[#1E222E]">
            <FiCopy size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
  <div>
    <a href={`mailto:${email}`} className="text-[#1E222E] block">
      {email}
    </a>
    <span className="text-[#1E222E] block">{phone}</span>
  </div>

  <div className="w-8 h-8">
    <CircularProgressbar
      value={17}
      text="17%"
      strokeWidth={12}
      styles={buildStyles({
        pathColor: '#F57C2E',
        textColor: '#F57C2E',
        trailColor: '#FEE9DD',
        textSize: '30px',
      })}
    />
  </div>
</div>
      </div>

      {/* Details */}
      <div className="bg-[#F8F8F8] mb-2 rounded-md p-4 text-sm text-[#546077] grid grid-cols-2 gap-y-2">
        <span>Budget Range</span>
        <span className="text-[#546077] font-medium">{budget}</span>

        <span>Unit Type</span>
        <span className="text-[#546077] font-medium">{type}</span>

        <span>Unit Location</span>
        <span className="text-[#546077] font-medium">{location}</span>

        <span>Data Added</span>
        <span className="text-[#546077] font-medium">{added}</span>
      </div>

      {/* Bottom Section with Tracker + Button */}
      <div className="flex justify-between items-end mt-4">
{/* Left: Stage Tracker */}
<div className="flex gap-2">
  {/* Vertical line with dynamic progress */}
  <div className="relative w-1 h-[70px]">
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 rounded-full" />

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

  {/* Labels with dynamic colors */}
  <div className="space-y-[10px]">
    {stages.map((stage, idx) => {
      let colorClass = "text-[#1E222E]";

      if (activeStageIndex === 0 && idx === 0) colorClass = "text-[#E35F27]";
      else if (activeStageIndex === 1 && idx <= 1) colorClass = "text-[#00A664]";
      else if (activeStageIndex === 2) colorClass = "text-blue-500";

      return (
        <p key={idx} className={`text-xs ${colorClass}`}>
          {stage.label}
        </p>
      );
    })}
  </div>
</div>


        {/* Right: Button */}
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
