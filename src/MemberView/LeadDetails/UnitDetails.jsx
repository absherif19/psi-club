import React from "react";

const UnitDetails = ({ details = {} }) => {
  const fields = [
    { label: "Unit ID", key: "unitId" },
    { label: "Location", key: "location" },
    { label: "Unit Type", key: "type" },
    { label: "Bedroom", key: "bedroom" },
    { label: "Bathroom", key: "bathroom" },
    { label: "Budget from", key: "budget" },
  ];

  return (
    <div className="bg-[#F9F9F9] rounded-lg p-6 w-full">
      <h2 className="text-[#E35F27] text-md font-semibold mb-4">
        Unit Details
      </h2>

      <div className="text-sm text-[#1E222E] space-y-3">
        {fields.map(({ label, key }) => (
          <div key={key} className="flex items-center">
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

export default UnitDetails;
