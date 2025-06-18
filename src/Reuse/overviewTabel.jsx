import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";

const OverviewTabel = ({
  title,
  buttonLabel,
  onButtonClick,
  columns,
  data,
  containerStyles = "bg-white rounded-3xl overflow-hidden sectionsShadow",
}) => {
    const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), // important!
  });


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
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={
                      header.column.getCanSort()
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                    className={`px-6 py-3 font-medium cursor-pointer select-none ${
                      header.column.columnDef.meta?.align === "right"
                        ? "text-right pr-11"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: "↑",
                        desc: "↓",
                      }[header.column.getIsSorted()] || null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#EEE] hover:bg-gray-50 transition"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`px-6 py-6 text-[#444A6D] font-normal text-[14px] ${
                      cell.column.columnDef.meta?.align === "right"
                        ? "text-right"
                        : ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
