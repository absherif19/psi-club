import React from 'react';
import { FiChevronDown, FiCircle } from 'react-icons/fi';

const ReferClientForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-[#1E222E] mb-1">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Full name"
          className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Surname */}
      <div>
        <label className="block text-sm font-medium text-[#1E222E] mb-1">
          Surname
        </label>
        <input
          type="text"
          placeholder="First name"
          className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#1E222E] mb-1">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Occupation */}
      <div>
        <label className="block text-sm font-medium text-[#1E222E] mb-1">
          Occupation <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Occupation"
          className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-sm focus:outline-none shadow-sm"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-[#1E222E] mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center border border-[#E2E8F0] rounded-md overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-white border-r border-[#E2E8F0]">
            <span className="text-sm">+971</span>
            <FiChevronDown className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="505 33445"
            className="w-full px-3 py-2 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Nationality */}
      <div>
        <label className="block text-sm font-medium text-[#1E222E] mb-1">
          Nationality <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center border border-[#E2E8F0] rounded-md px-3 py-2">
          <span className="text-sm text-[#1E222E] flex-grow">
            United Arab Emirates
          </span>
          <FiChevronDown className="text-gray-400" />
        </div>
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-end mt-2">
        <button
          type="submit"
          className="bg-[#EB5E28] hover:bg-[#d34e1f] text-white px-8 py-2 rounded-md flex items-center gap-2"
        >
          <FiCircle className="text-white" />
          Add
        </button>
      </div>
    </form>
  );
};

export default ReferClientForm;
