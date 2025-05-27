import React from "react";
import orangeicon from '../assets/orangeicon.svg';
import greenicon from '../assets/greenicon.svg';
import { useNavigate } from "react-router-dom";
import arrowRight from '../assets/Icons/arrowRight.png';


const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Total Referrals */}
      <div
        onClick={() => navigate("/all-my-referrals")}
        className="cursor-pointer flex justify-between items-center py-6 px-6 shadow-[0px_0px_37px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl mb-4"
      >
        <div className="flex items-center gap-4">
          <div className="bg-orange-100 p-4 rounded-full">
            <img src={orangeicon} alt="Referral Icon" className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-md font-medium text-[#272963]">Total Referrals</p>
            <p className="text-sm text-[#718EBF]">6 open / 9 Closed</p>
            <p className="text-[24px] font-medium text-[#E35F27]">15 Client</p>
          </div>
        </div>
        <img src={arrowRight} alt="Arrow" />
      </div>

      {/* Total Commission */}
      <div
        onClick={() => navigate("/all-my-commissions")}
        className="cursor-pointer flex justify-between items-center py-6 px-6 shadow-[0px_0px_37px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <img src={greenicon} alt="Commission Icon" className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-md font-medium text-[#272963]">Total Commission</p>
            <p className="text-sm text-[#718EBF]">6 Paid / 9 in Progress</p>
            <p className="text-[24px] font-medium text-[#00A664]">420,000 AED</p>
          </div>
        </div>
        <img src={arrowRight} alt="Arrow"/>
      </div>
    </div>
  );
};

export default Overview;