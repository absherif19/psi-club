import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const members = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    date: "12/12/2025",
    open: 1,
    closed: 2,
    total: 3,
    leads: [
      { name: "Mostafa Ahmed", status: "Open", date: "12/12/2025" },
      { name: "Sherif Mohamed", status: "Closed", date: "12/12/2025" },
    ],
  },
  {
    id: 2,
    name: "Sara Ahmed",
    date: "12/12/2025",
    open: 2,
    closed: 2,
    total: 4,
    leads: [],
  },
  {
    id: 3,
    name: "Ahmed Mostafa",
    date: "12/12/2025",
    open: 1,
    closed: 1,
    total: 2,
    leads: [],
  },
];

const MembersMain = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-gray-200 overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-lg font-semibold text-[#272963]">Members</h2>
        <button className="bg-[#E35F27] text-white text-sm px-4 py-1.5 rounded-md">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-[#7C7C7C] bg-white">
            <tr>
              <th className="px-6 py-3 font-medium">#</th>
              <th className="px-6 py-3 font-medium">Member Name</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Lead open</th>
              <th className="px-6 py-3 font-medium">Lead Closed</th>
              <th className="px-6 py-3 font-medium">Total Members</th>
              <th className="px-6 py-3 font-medium text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, idx) => (
              <React.Fragment key={member.id}>
                <tr className="border-b border-[#EDF2F6] text-[#444A6D]">
                  <td className="px-6 py-6">
                    {String(idx + 1).padStart(2, "0")}
                  </td>
                  <td className="px-6 py-6">{member.name}</td>
                  <td className="px-6 py-6">{member.date}</td>
                  <td className="px-6 py-6 text-[#00A664]">
                    {member.open} members
                  </td>
                  <td className="px-6 py-6 text-[#EC2308]">
                    {member.closed} members
                  </td>
                  <td className="px-6 py-6 text-[#444A6D]">
                    {member.total} members
                  </td>
                  <td className="px-6 py-6 text-center">
                    <button
                      className="p-1 border border-[#A7A7A7] rounded hover:bg-gray-100"
                      onClick={() => toggleRow(member.id)}
                    >
                      {expandedRow === member.id ? (
                        <FiChevronUp size={18} className="text-[#E35F27]" />
                      ) : (
                        <FiChevronDown size={18} className="text-[#444A6D]" />
                      )}
                    </button>
                  </td>
                </tr>

                {expandedRow === member.id &&
                  member.leads.length > 0 &&
                  member.leads.map((lead, i) => (
                    <tr
                      key={i}
                      className="bg-[#F6F6F6] text-[#444A6D] text-sm border-t border-gray-200"
                    >
                      <td className="px-6 py-4"></td> {/* # column (empty) */}
                      <td className="px-6 py-4">{lead.name}</td>{" "}
                      {/* Member Name */}
                      <td className="px-6 py-4">{lead.date}</td> {/* Date */}
                      <td className="px-6 py-4 text-[#00A664]">
                        {lead.status === "Open" ? "Open" : ""}
                      </td>
                      <td className="px-6 py-4 text-[#EC2308]">
                        {lead.status === "Closed" ? "Closed" : ""}
                      </td>
                      <td className="px-6 py-4"></td> {/* Total Members */}
                      <td className="px-6 py-4"></td> {/* Details */}
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersMain;
