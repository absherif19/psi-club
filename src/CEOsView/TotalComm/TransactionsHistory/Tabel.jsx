import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import DetailedTabel from "../../../Reuse/DetailedTabel";
const data = [
  {
    id: 1,
    memberName: "Olivia Rhye",
    connectedBy: "Feras Abu Laila",
    memberImg: "https://i.pravatar.cc/100?img=1",
    connectorImg: "https://i.pravatar.cc/100?img=11",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 1,
    memberName: "Olivia Rhye",
    connectedBy: "Feras Abu Laila",
    memberImg: "https://i.pravatar.cc/100?img=1",
    connectorImg: "https://i.pravatar.cc/100?img=11",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 1,
    memberName: "Olivia Rhye",
    connectedBy: "Feras Abu Laila",
    memberImg: "https://i.pravatar.cc/100?img=1",
    connectorImg: "https://i.pravatar.cc/100?img=11",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  {
    id: 2,
    memberName: "Phoenix Baker",
    connectedBy: "Nivine Ali",
    memberImg: "https://i.pravatar.cc/100?img=2",
    connectorImg: "https://i.pravatar.cc/100?img=12",
    status: "Active",
    commission: "30k",
    action: "in progress",
  },
  {
    id: 3,
    memberName: "Lana Steiner",
    connectedBy: "Amer Saadeh",
    memberImg: "https://i.pravatar.cc/100?img=3",
    connectorImg: "https://i.pravatar.cc/100?img=13",
    status: "Active",
    commission: "30k",
    action: "Paid",
  },
  // ... add more rows here
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("memberName", {
    header: "Member Name",
    

    cell: (info) => {
      const row = info.row.original;
      return (
        <div className="flex items-center gap-3">
          <img src={row.memberImg} alt="" className="w-10 h-10 rounded-full" />
          <span className="font-medium text-[#1C2C5B]">{row.memberName}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("connectedBy", {
    header: "Connections From",
    cell: (info) => {
      const row = info.row.original;
      return (
        <div className="flex items-center gap-3">
          <img src={row.connectorImg} alt="" className="w-10 h-10 rounded-full" />
          <span>{row.connectedBy}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const value = info.getValue();
      return (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            value === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      );
    },
  }),
  columnHelper.accessor("commission", {
    header: "Commissions",
    cell: (info) => (
      <span className="text-green-600 font-medium">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => {
      const value = info.getValue();
      return (
        <span
          className={
            value === "Paid"
              ? "text-green-600 font-medium"
              : "text-[#E35F27] font-medium"
          }
        >
          {value}
        </span>
      );
    },
  }),
  columnHelper.display({
    id: "details",
    header: "Details",
    cell: () => (
      <div className="text-right">
        <button className="border px-4 py-1 rounded-md text-sm hover:bg-gray-100">
          View
        </button>
      </div>
    ),
    meta: { align: "right" },
  }),
];

const Tabel = () => {
  return <DetailedTabel columns={columns} data={data} />;
};

export default Tabel;