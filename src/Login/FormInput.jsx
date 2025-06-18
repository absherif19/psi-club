import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const FormInput = ({
  field,
  value,
  onChange,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = field.type === 'password' && showPassword ? 'text' : field.type;
  const isPasswordField = field.type === 'password' && field.showToggle;
  const isSelectField = field.type === 'select';
  const isPhoneField = field.id === 'phoneNumber' && field.prefix;

  const handleChange = (e) => {
    onChange(field.id, e.target.value);
  };

  return (
    <div className="space-y-1">
      <div className="relative">
        {isSelectField ? (
          <select
            value={value}
            onChange={handleChange}
            className={`w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              error ? 'border-red-500' : 'border-[#CBD5E1]'
            }`}
            required={field.required}
          >
            <option value="">{field.placeholder}</option>
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <div className="relative">
            {isPhoneField && (
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                {field.prefix}
              </span>
            )}

            <input
              type={inputType}
              placeholder={field.placeholder}
              value={value}
              onChange={handleChange}
              className={`w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                isPasswordField ? 'pr-10' : ''
              } ${isPhoneField ? 'pl-14 px-4 py-2 ' : 'px-4 py-2'} ${
                error ? 'border-red-500' : 'border-[#CBD5E1]'
              }`}
              required={field.required}
            />

            {isPasswordField && (
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
