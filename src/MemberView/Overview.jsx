import React from "react";
import orangeicon from '../assets/orangeicon.svg';
import greenicon from '../assets/greenicon.svg';
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full">
    {/* Total Referrals */}
    <div onClick={() => {navigate("/all-my-referrals")}} className="cursor-pointer flex py-6 px-6  items-center shadow-[0px_0px_37px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl gap-4 mb-4">
      <div className="bg-orange-100 p-4 rounded-full">
        <img src={orangeicon} alt="Referral Icon" className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <p className="text-md font-medium text-[#272963]">Total Referrals</p>
        <p className="text-xs text-[#718EBF]">
          Last Referral in 28 January 2021
        </p>
        <p className="text-[24px] font-medium text-[#E35F27]">15 Client</p>
      </div>
    </div>

    {/* Total Commission */}
    <div className="flex py-6 px-6  items-center shadow-[0px_0px_37px_10px_rgba(0,_0,_0,_0.1)]  rounded-2xl gap-4">
      <div className="bg-green-100 p-4 rounded-full">
        <img src={greenicon} alt="Commission Icon" className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <p className="text-md font-medium text-[#272963]">Total Commission</p>
        <p className="text-xs text-[#718EBF]">
          Last Referral in 28 January 2021
        </p>
        <p className="text-[24px] font-medium text-[#00A664]">420,000 AED</p>
      </div>
    </div>
  </div>

  );
};

export default Overview;
