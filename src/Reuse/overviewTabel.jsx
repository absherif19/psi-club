import React from "react";

const OverviewTabel = ({
  title,
  buttonLabel,
  onButtonClick,
  columns,
  rows,
  containerStyles = "bg-white rounded-3xl overflow-hidden sectionsShadow",
}) => {
  return (
    <div className={containerStyles}>
      <div className="flex justify-between items-center px-8 py-6">
        <h2 className="text-xl font-semibold text-[#05004E]">{title}</h2>
        {buttonLabel && (
          <button
            onClick={onButtonClick}
            className="bg-[#E35F27] text-white text-sm px-6 py-2 rounded-md"
          >
            {buttonLabel}
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-[#7C7C7C] bg-white border-b border-[#EEE]">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-6 py-3 font-medium ${
                    col.align === "right" ? "text-right pr-11" : ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className="border-b border-[#EEE] hover:bg-gray-50 transition"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 py-6 text-[#444A6D] font-normal text-[14px] ${
                      col.align === "right" ? "text-right" : ""
                    }`}
                  >
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewTabel;
