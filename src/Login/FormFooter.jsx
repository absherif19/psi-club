import React from 'react';

const FormFooter = ({ footerData }) => {
  return (
    <footer className="absolute bottom-4 text-xs text-gray-500 text-center w-full px-4">
      {footerData.text}{" "}
      {footerData.teams.map((team, index) => (
        <React.Fragment key={team}>
          <span className="font-medium text-[#1E222E]">
            {team}
          </span>
          {index < footerData.teams.length - 1 && " - "}
        </React.Fragment>
      ))}
    </footer>
  );
};

export default FormFooter;