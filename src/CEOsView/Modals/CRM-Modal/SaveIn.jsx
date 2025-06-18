import React from "react";

const SaveIn = () => {
  return (
    <div className="space-y-4">
      {/* Dropdown */}
      <div>
        <label className="block text-sm text-[#444A6D] mb-1">Save in</label>
        <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-[#2D2E38] focus:outline-none">
          <option>Abu Dhabi - CRM</option>
          <option>Dubai - CRM</option>
          <option>Assets - CRM</option>
        </select>
      </div>

    </div>
  );
};

export default SaveIn;
