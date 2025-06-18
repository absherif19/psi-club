import React from "react";
import { useNavigate } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
import avatar from "../../assets/Avatars/MemberAvatar.png";
import FirasAvatar from "../../assets/Avatars/FirasAvatar.png";
import NivineAvatar from "../../assets/Avatars/NivineAvatar.png";
import AmerAvatar from "../../assets/Avatars/AmerAvatar.png";
import OverviewTabel from "../../Reuse/overviewTabel";

const requests = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    referredBy: "Feras Abu Laila",
    referredByImage: FirasAvatar,
    date: "12/12/2025",
    nationality: "United Arab Emirates",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    referredBy: "Nivine Ali",
    referredByImage: NivineAvatar,
    date: "12/12/2025",
    nationality: "United Arab Emirates",
  },
  {
    id: 3,
    name: "Ahmed Mostafa",
    referredBy: "Amer Saadeh",
    referredByImage: AmerAvatar,
    date: "12/12/2025",
    nationality: "United Arab Emirates",
  },
];

const columnHelper = createColumnHelper();

const MainRequests = () => {
  const navigate = useNavigate();

  const columns = [
    columnHelper.display({
      id: "index",
      header: "#",
      cell: (info) => String(info.row.index + 1).padStart(2, "0"),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img src={avatar} alt={row.name} className="w-8 h-8 rounded-full" />
            <span className="text-[#1E222E]">{row.name}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("referredBy", {
      header: "Referral by :",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img src={row.referredByImage} alt={row.referredBy} className="w-8 h-8 rounded-full" />
            <span className="text-[#1E222E]">{row.referredBy}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("date", {
      header: "Date",
      enableSorting: true,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("nationality", {
      header: "Nationality",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      meta: { align: "right" },
      cell: () => (
        <div className="flex justify-end items-center gap-2">
          <button className="bg-[#00A664] text-white text-xs px-4 py-2 rounded-md">
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
    <OverviewTabel
      title="Membership Requests"
      buttonLabel="View all"
      columns={columns}
      data={requests}
      onButtonClick={() => navigate("/membership-requests")}
      containerStyles="bg-white rounded-3xl border border-[#E35F27] overflow-hidden sectionsShadow"
    />
  );
};

export default MainRequests;
