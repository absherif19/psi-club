import React from 'react'
import BackButton from './../../Reuse/BackButton';

const Title = () => {
  return (
    <div className="flex items-center gap-4">
    <BackButton />
    <h1 className="text-base lg:text-3xl font-semibold text-[#272963]">
Total Commissions    </h1>
  </div>
  );
};

export default Title
