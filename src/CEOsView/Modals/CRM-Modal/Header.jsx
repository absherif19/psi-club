import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // using Ant Design close icon

const Header = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg text-[#05004E] font-semibold">Membership Requests</h2>
      <button onClick={onClose} className="p-2 rounded hover:bg-gray-200">
        <AiOutlineClose className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default Header;
