import React, { useState } from "react";
import { FiChevronDown, FiCircle } from "react-icons/fi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ReferClientForm = () => {
  const [formData, setFormData] = useState({});

  const formFields = [
    {
      id: "firstName",
      label: "First name",
      type: "text",
      placeholder: "First name",
      required: true,
      gridSpan: "md:col-span-1"
    },
    {
      id: "lastName",
      label: "Last name",
      type: "text",
      placeholder: "Last name",
      required: true,
      gridSpan: "md:col-span-1"
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "Email address",
      required: true,
      gridSpan: "md:col-span-1"
    },
    {
      id: "interestedTo",
      label: "Interested to",
      type: "select",
      placeholder: "Buy",
      options: ["Buy", "Rent", "Sell"],
      required: true,
      gridSpan: "md:col-span-1"
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "phone",
      placeholder: "Enter phone number",
      required: true,
      gridSpan: "md:col-span-1"
    },
    {
      id: "occupation",
      label: "Occupation",
      type: "text",
      placeholder: "Occupation",
      required: false,
      gridSpan: "md:col-span-1"
    },
    {
      id: "notes",
      label: "Notes",
      type: "textarea",
      placeholder: "Notes",
      rows: 4,
      required: false,
      gridSpan: "md:col-span-1"
    },
    {
      id: "nationality",
      label: "Nationality",
      type: "select",
      placeholder: "United Arab Emirates",
      options: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
      required: false,
      gridSpan: "md:col-span-1"
    },
    {
      id: "workPlace",
      label: "Work Place",
      type: "text",
      placeholder: "Work Place",
      required: false,
      gridSpan: "md:col-span-1"
    }
  ];

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const renderField = (field) => {
    const baseInputClasses = "w-full border border-slate-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";
    
    switch (field.type) {
      case "select":
        return (
          <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-transparent">
            <span className="text-sm text-slate-800 flex-grow">
              {formData[field.id] || field.placeholder}
            </span>
            <FiChevronDown className="text-gray-400 w-4 h-4" />
          </div>
        );
      
      case "phone":
        return (
          <PhoneInput
            placeholder={field.placeholder}
            value={formData[field.id]}
            onChange={(value) => handleInputChange(field.id, value)}
            defaultCountry="AE"
          />
        );
      
      case "textarea":
        return (
          <textarea
            placeholder={field.placeholder}
            rows={field.rows}
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className={`${baseInputClasses} resize-none`}
          />
        );
      
      default:
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className={baseInputClasses}
          />
        );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {formFields.map((field) => (
        <div key={field.id} className={field.gridSpan}>
          <label className="block text-sm font-medium text-slate-800 mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          {renderField(field)}
        </div>
      ))}

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-end mt-2">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2 rounded-md flex items-center gap-2 transition-colors"
        >
          <FiCircle  className="w-4 h-4" />
          Add
        </button>
      </div>
    </div>
  );
};

export default ReferClientForm;