import React from "react";

const requests = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    referredBy: "Said Abu Laila",
    date: "12/12/2025",
    agent: "Mostafa Hamdy",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    referredBy: "Said Abu Laila",
    date: "12/12/2025",
    agent: "Mostafa Hamdy",
  },
  {
    id: 3,
    name: "Ahmed Mostafa",
    referredBy: "Said Abu Laila",
    date: "12/12/2025",
    agent: "Mostafa Hamdy",
  },
];

const MainRequests = () => {
  return (
    <div className="bg-white rounded-3xl border border-[#E35F27] overflow-hidden shadow-lg shadow-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-xl font-semibold text-[#05004E]">Requests</h2>
        <button className="bg-[#E35F27] text-white text-sm px-4 py-1.5 rounded-md">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-[#1E222E] border-b border-[#EDF2F6]">
          <thead className="text-sm text-[#7C7C7C] bg-white">
            <tr>
              <th className="px-6 py-3 font-medium">#</th>
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Referral by :</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Agent Name</th>
              <th className="px-6 py-3 font-medium text-[#7C7C7C] text-right pr-18">
  Action
</th>

            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr
                key={req.id}
                className="border-b border-[#EDF2F6] text-[#444A6D]"
              >
                <td className="px-6 py-6">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-6 py-6">{req.name}</td>
                <td className="px-6 py-6">{req.referredBy}</td>
                <td className="px-6 py-6">{req.date}</td>
                <td className="px-6 py-6">{req.agent}</td>
                <td className="px-6">
                  <div className="flex justify-end items-center gap-2">
                    <button className="bg-[#00A664] text-white text-xs px-4 py-2 rounded-md">
                      Accept
                    </button>
                    <button className="bg-[#ABABAB] text-white text-xs px-4 py-2 rounded-md">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainRequests;
