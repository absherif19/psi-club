import React from "react";
import { useNavigate } from "react-router-dom";

const referrals = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    assignTo: "Mostafa Hamdy",
    date: "12/12/2025",
    percent: 80,
    color: "bg-blue-400",
    fill: "bg-blue-500",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    assignTo: "Mostafa Hamdy",
    date: "12/12/2025",
    percent: 60,
    color: "bg-green-200",
    fill: "bg-green-500",
  },
  {
    id: 3,
    name: "Ahmed Mostafa",
    assignTo: "Mostafa Hamdy",
    date: "12/12/2025",
    percent: 25,
    color: "bg-orange-200",
    fill: "bg-[#E35F27]",
  },
];


const MainAllReferrals = () => {
  const navigate = useNavigate()

  const ChairmanAllReferrals = () => {
    navigate("/all-referrals")
  }


  return (
    <div className="bg-white rounded-3xl  overflow-hidden shadow-lg shadow-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-xl font-semibold text-[#05004E]">All Referrals</h2>
        <button onClick={ChairmanAllReferrals} className="bg-[#E35F27] text-white text-sm px-4 py-1.5 rounded-md">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-sm text-[#7C7C7C] bg-white">
            <tr>
              <th className="px-6 py-3 font-medium">#</th>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Assign to</th>
              <th className="px-6 py-3 font-medium">Created date</th>
              <th className="px-6 py-3 font-medium ">Leads progress</th>
              <th className="px-6 py-3 font-medium text-end">
                Leads percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((item, idx) => (
              <tr
                key={item.id}
                className="border-b border-[#EDF2F6] text-[#444A6D]"
              >
                <td className="px-6 py-5">
                  {String(idx + 1).padStart(2, "0")}
                </td>
                <td className="px-6 py-6">{item.name}</td>
                <td className="px-6 py-6">{item.assignTo}</td>
                <td className="px-6 py-6">{item.date}</td>
                <td className="px-6 py-6">
                  <div
                    className={`w-full h-2 rounded-full ${item.color} relative`}
                  >
                    <div
                      className={`h-2 rounded-full absolute top-0 left-0 ${item.fill}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </td>
                <td className="px-6 py-5 text-end">
                  <span
                    className={`text-sm font-semibold px-8 py-1 rounded-full border ${
                      item.percent >= 70
                        ? "text-blue-500 border-blue-200 bg-blue-50"
                        : item.percent >= 50
                        ? "text-green-600 border-green-200 bg-green-50"
                        : "text-[#E35F27] border-orange-200 bg-orange-50"
                    }`}
                  >
                    {item.percent}%
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

export default MainAllReferrals;
