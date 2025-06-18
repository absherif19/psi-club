import React from "react";
import { useNavigate } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
import avatar from "../../assets/avatar.png";
import bojana from "../../assets/bojana.png";
import OverviewTabel from "../../Reuse/overviewTabel";

const referrals = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    nameAvatar: avatar,
    agent: "Bojana Popovic",
    agentAvatar: bojana,
    date: "12/12/2025",
    status: "Open",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    nameAvatar: avatar,
    agent: "Bojana Popovic",
    agentAvatar: bojana,
    date: "12/12/2025",
    status: "Closed",
  },
  {
    id: 3,
    name: "Ahmed Mostafa",
    nameAvatar: avatar,
    agent: "Bojana Popovic",
    agentAvatar: bojana,
    date: "12/12/2025",
    status: "Open",
  },
];

const statusColors = {
  Open: "text-green-600",
  Closed: "text-red-500",
};

const ReferralsTable = () => {
  const navigate = useNavigate();
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("name", {
      header: "Lead Name",

      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img src={row.nameAvatar} alt={row.name} className="w-8 h-8 rounded-full" />
            <span>{row.name}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("agent", {
      header: "Assign to",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-3">
            <img src={row.agentAvatar} alt={row.agent} className="w-8 h-8 rounded-full" />
            <span>{row.agent}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("date", {
      header: "Referred Date",
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const value = info.getValue();
        return <span className={`font-medium ${statusColors[value]}`}>{value}</span>;
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="text-right">
            <button
              onClick={() => navigate(`/referral/${row.id}`, { state: row })}
              className="border border-[#5A5A5A] text-[#5A5A5A] px-4 py-1 rounded-lg"
            >
              View
            </button>
          </div>
        );
      },
      meta: { align: "right" },
    }),
  ];

  return (
    <OverviewTabel
      title="My Referrals (Leads)"
      buttonLabel="View all"
      onButtonClick={() => navigate("/all-my-referrals")}
      columns={columns}
      data={referrals}
    />
  );
};

export default ReferralsTable;
