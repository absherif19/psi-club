import React from "react";

const ContactDetails = ({ details = {} }) => {
  const fields = [
    { label: "Contact Class", key: "contactClass" },
    { label: "Lead Class", key: "leadClass" },
    { label: "Lead Name", key: "leadName" },
    { label: "Mobile Number", key: "mobile" },
    { label: "Email", key: "email", isEmail: true },
  ];

  return (
    <div className="bg-[#F9F9F9] rounded-lg p-6 w-full">
      <h2 className="text-[#E35F27] text-md font-semibold mb-4">
        Contact Details
      </h2>

      <div className="text-sm text-[#1E222E] space-y-3">
        {fields.map(({ label, key }) => {
          const value = details[key] || "—";
          return (
            <div key={key} className="flex items-center">
              <span className="w-80 text-[#777] font-medium text-base">
                {label}
              </span>

              <span className="text-[#272963] font-medium">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;
