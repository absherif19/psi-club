import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import styling

const fields = [
  { name: "id", label: "ID", type: "text", value: "65343537", readOnly: true },
    {
    name: "emirates",
    label: "Emirates",
    type: "text",
    placeholder: "Abu Dhabi",
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "Vendor email@gmail.com",
    value: "vendoremail@gmail.com",
    hasVerify: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "phone",
    placeholder: "Enter phone number",
  },

  {
    name: "workPlace",
    label: "Work Place",
    type: "text",
    placeholder: "Work Place",
  },
  {
    name: "occupation",
    label: "Occupation",
    type: "text",
    placeholder: "Occupation",
  },
];

const Inputs = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: "65343537",
    email: "vendoremail@gmail.com",
    phone: "", // Initialize phone separately
    firstName: "",
    lastName: "",
    emirates: "",
    workPlace: "",
    occupation: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#F7F7F7] w-full p-6 rounded-2xl shadow space-y-6">
<form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
        {fields.map((field) => (
          <div key={field.name}>
            <div className="flex items-center justify-between mb-2">
              {" "}
              <label className="block text-xs text-[#2D3748] mb-1">
                {field.label}
              </label>
              {field.hasVerify && (
                <button
                  type="button"
                  disabled={!isEditing}
                  className={`text-xs ml-2 underline ${
                    isEditing
                      ? "text-green-600"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Verify
                </button>
              )}{" "}
            </div>
            <div className="flex items-center">
              {/* PhoneInput component for phone field */}
              {field.type === "phone" ? (
                <PhoneInput
                  placeholder={field.placeholder}
                  value={formData.phone}
                  onChange={(value) => handleChange("phone", value || "")}
                  disabled={!isEditing}
                  defaultCountry="AE"
                  className={`react-phone-input custom-PhoneInputInput w-full max-w-[450px] text-sm text-gray-700 ${
                    !isEditing ? " cursor-not-allowed" : "bg-white"
                  }`}
                />
              ) : (
                <>
                  {field.prefix && (
                    <span className="text-lg mr-2">{field.prefix}</span>
                  )}
                  <input
                    type={field.type}
                    value={formData[field.name] || field.value || ""}
                    readOnly={!isEditing || field.readOnly}
                    placeholder={field.placeholder}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className={`w-full max-w-[450px]  py-2 text-sm text-gray-700  ${
                      !isEditing || field.readOnly
                        ? " cursor-not-allowed"
                        : "bg-white px-4"
                    }`}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </form>

      <div className="text-right">
<button
  type="button"
  onClick={() => setIsEditing((prev) => !prev)}
  className={`w-[150px] text-white px-6 py-2 rounded-md text-sm font-medium ${
    isEditing ? "bg-orange-500 hover:bg-orange-600" : "bg-[#2C2D65] hover:bg-[#1f204e]"
  }`}
>
  {isEditing ? "Save" : "Edit"}
</button>

      </div>
    </div>
  );
};

export default Inputs;
