import React from "react";
import { useNavigate } from "react-router-dom";
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

const MainAllReferrals = () => {
  const navigate = useNavigate();

  const columns = [
    {
      label: "ID",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      label: "Lead Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.lead.image}
            alt={row.lead.name}
          />
          <span className="text-[#272963]">{row.lead.name}</span>
        </div>
      ),
    },
    {
      label: "Member Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.member.image}
            alt={row.member.name}
          />
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
      ),
    },
    {
      label: "Assign to",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.assignTo.image}
            alt={row.assignTo.name}
          />
          <span className="text-[#272963]">{row.assignTo.name}</span>
        </div>
      ),
    },
    { label: "Referred date", key: "date" },
    {
      label: "Status",
      render: (row) => (
        <span
          className={`text-sm font-medium ${
            row.status === "Open" ? "text-green-600" : "text-red-500"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      label: "",
      align: "right",
      render: () => (
        <button className="border border-[#A7A7A7] text-[#272963] px-5 py-1.5 rounded-md text-sm hover:bg-gray-50">
          View
        </button>
      ),
    },
  ];

  return (
    <OverviewTabel
      title="Referrals ( Leads )"
      buttonLabel="View all"
      onButtonClick={() => navigate("/all-referrals")}
      columns={columns}
      rows={referrals}
    />
  );
};

export default MainAllReferrals;
