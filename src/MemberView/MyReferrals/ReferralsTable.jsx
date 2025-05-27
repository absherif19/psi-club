import React from "react";
import { useNavigate } from "react-router-dom";
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

  const columns = [
    {
      label: "ID",
      render: (row) => <span>{row.id}</span>,
    },
    {
      label: "Lead Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.nameAvatar} alt={row.name} />
          <span>{row.name}</span>
        </div>
      ),
    },
    {
      label: "Assign to",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.agentAvatar} alt={row.agent} />
          <span>{row.agent}</span>
        </div>
      ),
    },
    {
      label: "Referred Date",
      key: "date",
    },
    {
      label: "Status",
      render: (row) => (
        <span className={`font-medium ${statusColors[row.status]}`}>
          {row.status}
        </span>
      ),
    },
    {
      label: "",
      align: "right",
      render: (row) => (
        <button
          onClick={() =>
            navigate(`/referral/${row.id}`, {
              state: row,
            })
          }
          className="border border-[#5A5A5A] text-[#5A5A5A] px-4 py-1 rounded-lg"
        >
          View
        </button>
      ),
    },
  ];

  return (
    <OverviewTabel
      title="My Referrals ( Leads )"
      buttonLabel="View all"
      onButtonClick={() => navigate("/all-my-referrals")}
      columns={columns}
      rows={referrals}
    />
  );
};

export default ReferralsTable;
