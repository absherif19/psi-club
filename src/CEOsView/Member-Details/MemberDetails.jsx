import React from "react";
import { FaRegCopy } from "react-icons/fa";
import MemberAvatar from "../../assets/Avatars/MemberAvatar.png"; // Replace with actual avatar path

const MemberDetails = () => {
  const member = {
    name: "Ahmed Sowan",
    membershipNo: "34567890",
    status: "Active",
    image: MemberAvatar,
  };

  return (
    <div className="flex justify-between items-center">
      {/* Left Section: Avatar + Name + Membership No */}
      <div className="flex items-center gap-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-[#272963]">{member.name}</h2>
          <p className="text-sm">
            <span className="text-[#E35F27] font-medium">Membership No.</span>{" "}
            <span className="text-gray-600">{member.membershipNo}</span>{" "}
            <FaRegCopy className="inline ml-1 text-gray-400 cursor-pointer" />
          </p>
        </div>
      </div>

      {/* Right Section: Status */}
      <div className="flex space-x-2 items-center">
        <p className="text-sm text-gray-500">Member Status</p>
        <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
          {member.status}
        </span>
      </div>
    </div>
  );
};

export default MemberDetails;
