import React from "react";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/Icons/arrowRight.png";
import cardData from "./Data";

const Overview = () => {
  const navigate = useNavigate();

  const renderCards = cardData.map((card) => (
    <div
      key={card.id}
      onClick={() => navigate(card.link)}
      className="cursor-pointer flex justify-between items-center py-6 px-6 shadow-[0px_0px_37px_10px_rgba(0,_0,_0,_0.1)] rounded-2xl"
    >
      <div className="flex items-center gap-4">
        <div className={`${card.bgColor} p-4 rounded-full`}>
          <img src={card.icon} alt={`${card.title} Icon`} className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <p className="text-md font-medium text-[#272963]">{card.title}</p>
          <p className="text-sm text-[#718EBF]">{card.subtitle}</p>
          <p
            className="text-[24px] font-medium"
            style={{ color: card.valueColor }}
          >
            {card.value}
          </p>
        </div>
      </div>
      <img src={arrowRight} alt="Arrow" />
    </div>
  ));

  
  return <div className="w-full space-y-4">{renderCards}</div>;
};

export default Overview;
