import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import bgImage from '../../assets/loyaltyProgramBg.jpg';

const MainLoyaltyProgram = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between rounded-2xl p-10 bg-cover bg-center text-white h-[370px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default MainLoyaltyProgram;
