import React from 'react';
import { FaUser, FaCreditCard } from 'react-icons/fa';

const Menu = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      key: 'general',
      label: 'General Info',
      icon: <FaUser className="w-4 h-4" />,
    },
    {
      key: 'payment',
      label: 'Payment Info',
      icon: <FaCreditCard className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex flex-col h-fit min-w-60 rounded-xl overflow-hidden shadow border border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex w-full justify-center items-center gap-2 px-4 py-4 text-sm font-medium transition-all 
            ${
              activeTab === tab.key
                ? 'bg-[#E35F27] text-white'
                : 'bg-[#F9F9F9] text-[#999]'
            }`}
        >
          {React.cloneElement(tab.icon, {
            className: `${
              activeTab === tab.key ? 'text-white' : 'text-[#999]'
            } w-4 h-4`,
          })}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Menu;
