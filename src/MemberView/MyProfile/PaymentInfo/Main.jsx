import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const fields = [
  {
    name: "accountHolder",
    label: "Account Holder Name",
    type: "text",
    placeholder: "Account Holder Name",
  },
  {
    name: "accountType",
    label: "Account Type (Savings / Current / Business)",
    type: "select",
    options: ["Business", "Current", "Savings"],
  },
  {
    name: "bankName",
    label: "Bank Name",
    type: "text",
    placeholder: "Bank Name",
  },
  {
    name: "iban",
    label: "IBAN (International Bank Account Number)",
    type: "text",
    placeholder: "IBAN",
  },
  {
    name: "branch",
    label: "Bank Branch / Branch Name",
    type: "text",
    placeholder: "Bank Branch / Branch Name",
  },
  {
    name: "country",
    label: "Country",
    type: "select",
    options: ["United Arab Emirates", "Saudi Arabia", "Qatar"],
  },
  {
    name: "accountNumber",
    label: "Bank Account Number",
    type: "text",
    placeholder: "Bank Account Number",
  },
  {
    name: "swift",
    label: "Swift Code",
    type: "text",
    placeholder: "Swift",
  },
  {
    name: "currency",
    label: "Currency",
    type: "select",
    options: ["AED", "SAR", "USD"],
  },
];

const MainPaymentInfo = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.options ? field.options[0] : "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#F7F7F7] p-8 rounded-2xl">
      <h2 className="text-xl font-semibold text-black mb-8">Bank details</h2>
<form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-5xl">
        {fields.map((field) => (
<div
  key={field.name}
  className={`max-w-[450px] ${
    field.name === "swift" || field.name === "currency" ? "md:col-span-1" : ""
  }`}
>

            <label className="block mb-1 max-w-[450px] text-sm font-medium text-[#2B3674]">
              {field.label}
            </label>
            {field.type === "text" ? (
              <input
                type="text"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                readOnly={!isEditing}
                className={`w-full max-w-[450px] rounded-lg  py-3 text-sm ${
                  isEditing ? "bg-white px-4" : " cursor-not-allowed"
                } focus:outline-none focus:ring-1 focus:ring-[#2C2D65]`}
              />
            ) : (
              <div className="relative">
                <select
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full max-w-[450px] rounded-lg py-3 text-sm pr-10 ${
                    isEditing ? "bg-white px-4" : " cursor-not-allowed"
                  } focus:outline-none focus:ring-1 focus:ring-[#2C2D65]`}
                />

              </div>
            )}
          </div>
        ))}
      </form>

<div className="mt-8 text-right space-x-4">
  {isEditing && (
    <button
      type="button"
      onClick={() => {
        setIsEditing(false); // Exit edit mode
      }}
      className="w-[150px] border border-gray-300 text-gray-700 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
    >
      Cancel
    </button>
  )}

  <button
    type="button"
    onClick={() => setIsEditing((prev) => !prev)}
    className={`w-[150px] text-white px-6 py-2 rounded-md text-sm font-medium ${
      isEditing
        ? "bg-orange-500 hover:bg-orange-600"
        : "bg-[#2C2D65] hover:bg-[#1f204e]"
    }`}
  >
    {isEditing ? "Save" : "Edit"}
  </button>
</div>

    </div>
  );
};

export default MainPaymentInfo;
