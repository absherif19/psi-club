import React from "react";
import { useNavigate } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
import BojanaAvatar from "../../assets/bojana.png";
import LeadAvatar from "../../assets/Avatars/LeadAvatar.png";
import MemberAvatar from "../../assets/Avatars/MemberAvatar.png";
import OverviewTabel from "../../Reuse/overviewTabel";

const referrals = [
  {
    id: 1,
    lead: { name: "Ahmed Mohamed", image: LeadAvatar },
    member: { name: "Ahmed Sowan", status: "Active", image: MemberAvatar },
    assignTo: { name: "Bojana Popovic", image: BojanaAvatar },
    date: "12/12/2025",
    status: "Open",
  },
  {
    id: 2,
    lead: { name: "Sara Ahmed", image: LeadAvatar },
    member: { name: "Mohamed Hendi", status: "Inactive", image: MemberAvatar },
    assignTo: { name: "Bojana Popovic", image: BojanaAvatar },
    date: "12/12/2025",
    status: "Closed",
  },
  {
    id: 3,
    lead: { name: "Ahmed Mostafa", image: LeadAvatar },
    member: { name: "Emad Al Khaidi", status: "Active", image: MemberAvatar },
    assignTo: { name: "Bojana Popovic", image: BojanaAvatar },
    date: "12/12/2025",
    status: "Open",
  },
];

const columnHelper = createColumnHelper();

const MainAllReferrals = () => {
  const navigate = useNavigate();

  const columns = [
    columnHelper.display({
      id: "id",
      header: "ID",
      cell: (info) => String(info.row.index + 1).padStart(2, "0"),
    }),
    columnHelper.accessor((row) => row.lead.name, {
      id: "lead",
      header: "Lead Name",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img src={row.lead.image} alt={row.lead.name} className="w-8 h-8 rounded-full" />
            <span className="text-[#272963]">{row.lead.name}</span>
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "member",
      header: "Member Name",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img src={row.member.image} alt={row.member.name} className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-[#272963] font-medium">{row.member.name}</p>
              <p
                className={`text-xs ${
                  row.member.status === "Active"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {row.member.status}
              </p>
            </div>
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "assignTo",
      header: "Assign to",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img src={row.assignTo.image} alt={row.assignTo.name} className="w-8 h-8 rounded-full" />
            <span className="text-[#272963]">{row.assignTo.name}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("date", {
      header: "Referred date",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const value = info.getValue();
        return (
          <span
            className={`text-sm font-medium ${
              value === "Open" ? "text-green-600" : "text-red-500"
            }`}
          >
            {value}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      meta: { align: "right" },
      cell: () => (
        <div className="text-right">
          <button className="border border-[#A7A7A7] text-[#272963] px-5 py-1.5 rounded-md text-sm hover:bg-gray-50">
            View
          </button>
        </div>
      ),
    }),
  ];

  return (
    <OverviewTabel
      title="Referrals ( Leads )"
      buttonLabel="View all"
      onButtonClick={() => navigate("/all-referrals")}
      columns={columns}
      data={referrals}
    />
  );
};

export default MainAllReferrals;
