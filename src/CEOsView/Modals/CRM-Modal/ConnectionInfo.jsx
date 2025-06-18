import React from "react";

const ConnectionInfo = () => {
  return (
    <div className="bg-[#F8F8F8] p-8 space-y-4 rounded-2xl">
      <h1 className="text-[12px] text-[#667085] font-medium">
        Connection From
      </h1>
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/100?img=1"
          alt="User Avatar"
          className="w-18 rounded-full"
        />

        <div>
          <h2 className="text-[#444A6D] text-xl font-medium">Nivine Ali</h2>
          <h4 className="text-[12px] text-[#667085]">CEO Abu Dhabi, Assets</h4>
        </div>
      </div>
    </div>
  );
};

export default ConnectionInfo;
