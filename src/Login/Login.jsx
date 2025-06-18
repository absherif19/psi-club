import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormFooter from './FormFooter';
import { footerData, formConfig } from './Data';

const LoginForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const config = formConfig.login;
  
  const [formData, setFormData] = useState(
    config.fields.reduce((acc, field) => ({
      ...acc,
      [field.id]: ''
    }), {})
  );
  
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
    
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({
        ...prev,
        [fieldId]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    config.fields.forEach(field => {
      const value = formData[field.id];
      const validation = field.validation;
      
      if (validation.required && !value.trim()) {
        newErrors[field.id] = validation.required;
        return;
      }
      
      if (validation.pattern && !validation.pattern.value.test(value)) {
        newErrors[field.id] = validation.pattern.message;
        return;
      }
      
      if (validation.minLength && value.length < validation.minLength.value) {
        newErrors[field.id] = validation.minLength.message;
        return;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }
    
    // Check if username/email is 'said' (case insensitive)
    if (formData.email.trim().toLowerCase() === 'said') {
      navigate('/chairman');
    } else {
      navigate('/main');
    }
  };

  return (
    <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center items-center bg-white px-8">
      <FormHeader 
        title={config.title}
        subtitle={config.subtitle}
      />

      <div className="w-full max-w-sm space-y-4 min-h-[180px]">
        {config.fields.map(field => (
          <FormInput
            key={field.id}
            field={field}
            value={formData[field.id]}
            onChange={handleInputChange}
            error={errors[field.id]}
          />
        ))}

        {config.showRememberMe && (
          <div className="flex items-center justify-between text-sm">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                  rememberMe ? "bg-orange-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    rememberMe ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <span className="text-sm text-[#1E222E]">Remember me</span>
            </div>

            {config.showForgotPassword && (
              <a href="#" className="text-orange-500 hover:underline">
                forgot password
              </a>
            )}
          </div>
        )}

        <button
          onClick={handleLogin}
          className="w-full cursor-pointer bg-[#E85D04] text-white py-2 rounded-md text-sm hover:bg-orange-600 transition"
        >
          {config.buttonText}
        </button>
        
        <div className="text-center text-sm text-[#1E222E] mt-3">
          {config.switchText}{" "}
          <span
            className="text-orange-500 font-medium hover:underline cursor-pointer"
            onClick={onSwitch}
          >
            {config.switchLinkText}
          </span>
        </div>
      </div>
      
      <FormFooter footerData={footerData} />
    </div>
  );
};

export default LoginForm;