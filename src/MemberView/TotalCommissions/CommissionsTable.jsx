import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const statusColors = {
  Active: "text-green-600",
  Inactive: "text-red-500",
};

const actionColors = {
  Paid: "text-green-600",
  "In progress": "text-yellow-500",
};

const CommissionsTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(data.length / pageSize);

  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="bg-white rounded-2xl border border-[#EAECF0] w-full">
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-[#667085] bg-[#F9FAFB]">
            <tr>
              <th className="px-6 py-3 w-[200px]">Lead Name</th>
              <th className="px-6 py-3 w-[160px]">Transaction ID</th>
              <th className="px-6 py-3 w-[100px]">Status</th>
              <th className="px-6 py-3 w-[140px]">Mobile</th>
              <th className="px-6 py-3 w-[240px]">Email address</th>
              <th className="px-6 py-3 w-[100px]">Commission</th>
              <th className="px-6 py-3 w-[120px]">Action</th>
              <th className="px-6 py-3 w-[80px]"></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((lead, idx) => (
              <tr key={idx} className="border-t border-gray-100 text-[#0F1D40]">
                <td className="p-3 text-[#444A6D] font-normal text-[14px]">
                  <div className="flex items-center gap-3">
                    <img
                      src={lead.avatar || avatar}
                      alt={lead.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <span>{lead.name}</span>
                  </div>
                </td>

                <td className="px-6 py-3 text-[#444A6D] text-[14px]">
                  {lead.transactionId}
                </td>

                <td
                  className={`px-6 py-3 ${
                    statusColors[lead.status] || "text-gray-600"
                  }`}
                >
                  {lead.status}
                </td>

                <td className="px-6 py-3 text-[#444A6D] text-[14px]">
                  {lead.mobile}
                </td>

                <td className="px-6 py-3 text-[#444A6D] text-[14px]">
                  {lead.email}
                </td>

                <td className="px-6 py-3 text-[#444A6D] text-[14px] font-medium">
                  {lead.commission}
                </td>

                <td
                  className={`px-6 py-3 font-medium ${
                    actionColors[lead.action] || "text-gray-500"
                  }`}
                >
                  {lead.action}
                </td>

                <td className="p-3 text-right">
                  <button className="border border-gray-400 px-4 py-1 rounded-md hover:bg-gray-50 transition text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-[#EAECF0] text-sm">
        {/* Page Numbers */}
        <div className="space-x-1">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`rounded-lg px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-[#E35F27] text-white"
                  : "text-[#667085] hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="space-x-2 flex">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="flex items-center gap-2 border border-[#D0D5DD] rounded-lg px-4 py-1 text-[#344054] disabled:opacity-50"
          >
            <FiArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex items-center gap-2 border border-[#D0D5DD] rounded-lg px-4 py-1 text-[#344054] disabled:opacity-50"
          >
            Next
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionsTable;
