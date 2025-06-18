import React from 'react';

const FormHeader = ({ title, subtitle, logoSrc = "/psi-logo.svg", logoAlt = "PSI Logo" }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <img src={logoSrc} alt={logoAlt} className="mb-5" />
      <h2 className="text-[36px] text-[#1E222E] font-semibold mb-1">
        {title}
      </h2>
      <p className="text-[#5F6D7E] text-[18px] mb-2">
        {subtitle}
      </p>
    </div>
  );
};

export default FormHeader;