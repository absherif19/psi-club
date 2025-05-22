import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const referrals = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    agent: "Mostafa Hamdy",
    date: "12/12/2025",
    progress: 80,
    color: "blue",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    agent: "Mostafa Hamdy",
    date: "12/12/2025",
    progress: 60,
    color: "green",
  },
  {
    id: 3,
    name: "Ahmed Mostafa",
    agent: "Mostafa Hamdy",
    date: "12/12/2025",
    progress: 25,
    color: "orange",
  },
];

const colorClasses = {
  blue: "bg-blue-500",
  green: "bg-green-600",
  orange: "bg-orange-500",
};

const lightColorClasses = {
  blue: "bg-blue-100 text-blue-500 border border-blue-300",
  green: "bg-green-100 text-green-600 border border-green-300",
  orange: "bg-orange-100 text-orange-500 border border-orange-300",
};

const ReferralsTable = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-[0px_0px_37px_10px_rgba(0,_0,_0,_0.1)] p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#444A6D]">My Referrals</h2>
        <button onClick={() => navigate("/all-my-referrals")} className="bg-[#E35F27] hover:bg-[#d34e1f] text-white text-sm  py-1.5 px-6 rounded-lg">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-[#96A5B8] text-sm ">
            <tr>
              <th className="py-3">#</th>
              <th>Lead Name</th>
              <th>Assigned To</th>
              <th>Creation Date</th>
              <th>Lead Stage Compelation</th>
              <th className="text-right">Percentage %</th> {/* Align right */}
            </tr>
          </thead>
          <tbody>
            {referrals.map((ref, idx) => (
              <tr key={ref.id} className="border-t border-gray-100">
                <td className="py-6 text-[#444A6D]">{String(idx + 1).padStart(2, "0")}</td>
                <td className="text-[#444A6D]">{ref.name}</td>
                <td className="text-[#444A6D]">{ref.agent}</td>
                <td className="text-[#444A6D]">{ref.date}</td>
                <td className="w-[250px]">
                  <div className="h-[6px] w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${colorClasses[ref.color]} h-full transition-all duration-500`}
                      style={{ width: `${ref.progress}%` }}
                    />
                  </div>
                </td>
                <td className="text-right pr-2">
                  <span
                    className={`inline-block px-8 py-1 text-sm rounded-md ${lightColorClasses[ref.color]}`}
                  >
                    {ref.progress}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralsTable;
