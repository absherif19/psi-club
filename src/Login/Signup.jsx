import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormFooter from './FormFooter';
import { formConfig } from './Data';

const SignupForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const config = formConfig.signup;
  
  const [formData, setFormData] = useState(
    config.fields.reduce((acc, field) => ({
      ...acc,
      [field.id]: ''
    }), {})
  );
  
  const [errors, setErrors] = useState({});

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
      
      if (validation.validate) {
        const validationResult = validation.validate(value, formData);
        if (validationResult !== true) {
          newErrors[field.id] = validationResult;
          return;
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validateForm()) {
      return;
    }
    
    // Handle signup logic here
    console.log('Signup data:', formData);
    
    // For now, navigate to main page after signup
    navigate('/main');
  };

  return (
    <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center items-center bg-white px-8">
      <FormHeader 
        title={config.title}
        subtitle={config.subtitle}
      />

      <div className="w-full max-w-sm space-y-4">
        {config.fields.map(field => (
          <FormInput
            key={field.id}
            field={field}
            value={formData[field.id]}
            onChange={handleInputChange}
            error={errors[field.id]}
          />
        ))}

        <button
          onClick={handleSignup}
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
      
    </div>
  );
};

export default SignupForm;