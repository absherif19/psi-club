import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import notification from "../assets/ring.svg";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full px-20 py-3 flex items-center justify-between bg-white shadow-sm relative">
      {/* Logo & Greeting */}
      <div className="flex items-center gap-12">
        <img
          src="/psi-logo.svg"
          alt="PSI Club Logo"
          className="h-10 object-contain"
        />
        <h1 className="text-lg font-semibold text-gray-800">Hello, Mostafa</h1>
      </div>

      {/* Profile Section */}
      <div className="relative flex items-center gap-3" ref={dropdownRef}>
        <img
          src={notification}
          alt="Notifications"
          className="w-5 h-5 mr-2 object-contain"
        />

        {/* Avatar */}
        <img
          src={avatar}
          alt="User Avatar"
          className="w-12 h-12 object-cover"
        />
        <div className="text-right">
          <h2 className="text-sm font-semibold text-[#1E222E]">
            Mostafa Hamdy
          </h2>
          <p className="text-xs text-gray-500 text-start">Title here</p>
        </div>
        <FiChevronDown
          size={16}
          className="text-[#1E222E] cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        />

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-16 right-0 bg-white rounded-lg shadow-lg w-44 z-10 p-3">
            <button
              onClick={() => navigate("/my-profile")}
              className="w-full cursor-pointer flex items-center gap-2 text-[#888888] font-semibold py-2 px-4 rounded-lg "
            >
              My Profile
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full cursor-pointer flex items-center gap-2 text-[#E35F27] font-semibold py-2 px-4 rounded-lg "
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
