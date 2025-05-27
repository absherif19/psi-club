import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import psiLogo from "/psi-logo.svg";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({onSwitch}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = () => {
    // Replace with actual registration logic
    navigate("/main");
  };

  return (
    <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center items-center bg-white px-8">
      {/* Header */}
      <div className="relative w-full max-w-sm mb-6 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img src={psiLogo} alt="PSI Logo" className="mb-2" />
          <div className="flex items-center">
            <button
    onClick={onSwitch}
              className="absolute left-0 w-9 h-9 rounded-full border border-[#1E222E] flex items-center justify-center hover:bg-gray-100 transition"
            >
              <FiArrowLeft className="text-[#1E222E]" />
            </button>
            <div>
              <h2 className="text-[28px] text-[#1E222E] font-semibold mb-1">Get Started</h2>
              <p className="text-[#5F6D7E] text-[16px]">Getting started is easy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
<div className="w-full max-w-sm space-y-4">
  <select className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
    <option>Connection From :</option>
    <option>Website</option>
    <option>Referral</option>
    <option>Social Media</option>
  </select>

  <div className="flex gap-2">
    <input type="text" placeholder="First name" className="w-1/2 border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
    <input type="text" placeholder="Last name" className="w-1/2 border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
  </div>

  <input type="email" placeholder="Email Address" className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />

  <select className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
    <option>🇦🇪 Nationality</option>
  </select>

  <select className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
    <option>🇦🇪 Country of residence</option>
  </select>

  <div className="flex items-center border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus-within:ring-2 focus-within:ring-orange-500">
    <span className="pr-2">🇦🇪 +971</span>
    <input type="text" placeholder="Phone number" className="flex-1 outline-none" />
  </div>

  <input type="text" placeholder="Work place" className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </div>
  </div>

  <div className="relative">
    <input
      type={showConfirm ? "text" : "password"}
      placeholder="Confirm Password"
      className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
      onClick={() => setShowConfirm(!showConfirm)}
    >
      {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </div>
  </div>

  <p className="text-xs text-orange-500 text-left">
    Terms & Conditions apply
  </p>

  <button
    onClick={handleRegister}
    className="w-full cursor-pointer bg-[#E85D04] text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
  >
    Register
  </button>
</div>

    </div>
  );
};

export default SignUpForm;
