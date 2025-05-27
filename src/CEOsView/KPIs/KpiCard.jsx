import React from 'react'

const KpiCard = ({ label, value, onClick, buttonText = "Details" }) => (
  <div className="bg-white rounded-lg shadow-normal py-8 px-4 min-w-[400px] w-full">
    <div className="flex items-start justify-between mb-4">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl text-green-600 font-semibold">{value}</p>
      </div>
      <button
        onClick={onClick}
        className="bg-[#E35F27] hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-md"
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default KpiCard
