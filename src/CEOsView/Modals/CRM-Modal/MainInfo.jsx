import React from "react";

const MainInfo = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-6">
      {/* Left Section: Avatar + Name */}
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/100?img=1"
          alt="User Avatar"
          className="w-16 rounded-full"
        />
        <h2 className="text-[#444A6D] text-xl font-medium">Sara Ahmed</h2>
      </div>

      {/* Right Section: Member Info */}
<div className="text-sm text-[#444A6D] grid grid-cols-2 gap-y-4">
  <span className="font-medium">Membership No.</span>
  <span className="text-[#444A6D]">2025001</span>

  <span className="font-medium">Request Date</span>
  <span className="text-[#444A6D]">12/12/2025</span>

  <span className="font-medium">Nationality</span>
  <div className="flex items-center gap-2">
    <span className="text-[#444A6D]">United Arab Emirates</span>
  </div>
</div>

    </div>
  );
};

export default MainInfo;
