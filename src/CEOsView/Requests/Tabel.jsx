import React, { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import DetailedTabel from "../../Reuse/DetailedTabel";
import CrmModal from "../Modals/CRM-Modal/CrmModal";

const requests = [
  {
    id: 1,
    name: "Olivia Rhye",
    connector: "Feras Abu Laila",
    mobile: "5098765432",
    email: "olivia@untitledui.com",
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=1",
    connectorAvatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Phoenix Baker",
    connector: "Nivine Ali",
    mobile: "5098765432",
    email: "phoenix@untitledui.com",
    nationality: "United Arab Emirates",
    avatar: "https://i.pravatar.cc/100?img=2",
    connectorAvatar: "https://i.pravatar.cc/100?img=12",
  },
];

const columnHelper = createColumnHelper();

const Tabel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img
              src={row.avatar}
              alt={row.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-[#1C2C5B] font-medium">{row.name}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("connector", {
      header: "Connections From",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img
              src={row.connectorAvatar}
              alt={row.connector}
              className="w-10 h-10 rounded-full"
            />
            <span>{row.connector}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("mobile", {
      header: "Mobile",
    }),
    columnHelper.accessor("email", {
      header: "Email address",
    }),
    columnHelper.accessor("nationality", {
      header: "Nationality",
      cell: () => (
        <div className="flex items-center gap-2">
          <span>United Arab Emirates</span>
        </div>
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      cell: () => (
        <div className="flex gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#00A664] text-white text-xs px-4 py-2 rounded-md"
          >
            Accept
          </button>
          <button className="bg-[#ABABAB] text-white text-xs px-4 py-2 rounded-md">
            Reject
          </button>
        </div>
      ),
    }),
  ];

  return (
    <>
      <DetailedTabel columns={columns} data={requests} pageSize={10} />
      {isModalOpen && <CrmModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Tabel;
