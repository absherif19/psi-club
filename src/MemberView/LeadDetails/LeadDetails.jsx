import React from "react";

const LeadDetails = ({ details = {} }) => {
  const fields = [
    { label: "Status", key: "status" },
    { label: "Rating", key: "rating" },
    { label: "Last Activity", key: "lastActivity" },
    { label: "Stage", key: "stage" },
    { label: "Source", key: "source" },
    { label: "Last Activity", key: "lastActivity" }, // repeated on purpose if needed twice
  ];

  return (
    <div className="bg-[#F9F9F9] rounded-lg p-6 w-full">
      <h2 className="text-[#E35F27] text-md font-semibold mb-4">Lead Details</h2>

      <div className="text-sm text-[#1E222E] space-y-3">
        {fields.map(({ label, key }, index) => (
          <div key={index} className="flex items-center">
            <span className="w-80 text-[#777] font-medium text-base">
              {label}
            </span>
            <span className="text-[#272963] font-medium">
              {details[key] || "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadDetails;
