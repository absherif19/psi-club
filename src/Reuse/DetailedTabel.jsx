import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const DetailedTabel = ({ columns, data, pageSize = 10 }) => {
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize,
  });

  console.log(pagination)

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
     onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
      manualPagination: false,
  });

  return (
    <div className="overflow-x-auto tabelShadow rounded-lg border border-[#EAECF0]">
      <table className="min-w-full   bg-white text-sm text-left text-gray-700">
        <thead className="bg-[#F9FAFB] rounded-lg border-b border-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort();
                const sortDirection = header.column.getIsSorted();

                return (
                  <th
                    key={header.id}
                    onClick={
                      canSort
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                    className={`p-4 cursor-pointer select-none ${
                      canSort ? "hover:text-orange-600" : ""
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {sortDirection === "asc" && "↑"}
                      {sortDirection === "desc" && "↓"}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-100 hover:bg-gray-50 align-middle"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm">
        <div className="space-x-1">
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <button
              key={i}
              onClick={() => table.setPageIndex(i)}
              className={`rounded-lg px-3 py-1 ${
                i === table.getState().pagination.pageIndex
                  ? "bg-[#E35F27] text-white"
                  : "text-[#667085] hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="space-x-2 flex">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-1 text-[#344054] disabled:opacity-50"
          >
            <FiArrowLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-1 text-[#344054] disabled:opacity-50"
          >
            Next
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedTabel;
