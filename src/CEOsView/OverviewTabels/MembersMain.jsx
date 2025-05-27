import React from "react";
import FirasAvatar from "../../assets/Avatars/FirasAvatar.png";
import NivineAvatar from "../../assets/Avatars/NivineAvatar.png";
import AmerAvatar from "../../assets/Avatars/AmerAvatar.png";
import MemberAvatar from "../../assets/Avatars/MemberAvatar.png";
import OverviewTabel from "../../Reuse/overviewTabel";
const members = [
  {
    id: 1,
    membershipNo: "2025001",
    name: "Ahmed Sowan",
    status: "Active",
    image: MemberAvatar,
    connection: {
      name: "Firas Abu Laila",
      title: "CEO Abu Dhabi, Assets",
      image: FirasAvatar,
    },
    joinDate: "12/12/2025",
    leads: 3,
  },
  {
    id: 2,
    membershipNo: "20250012",
    name: "Mohamed Hendi",
    status: "Inactive",
    image: MemberAvatar,
    connection: {
      name: "Nivine Ali",
      title: "CEO Abu Dhabi, Assets",
      image: NivineAvatar,
    },
    joinDate: "12/12/2025",
    leads: 4,
  },
  {
    id: 3,
    membershipNo: "2025003",
    name: "Emad Al Khaidi",
    status: "Active",
    image: MemberAvatar,
    connection: {
      name: "Amer Saadeh",
      title: "CEO Dubai Branch",
      image: AmerAvatar,
    },
    joinDate: "12/12/2025",
    leads: 2,
  },
];

const columns = [
  { label: "Membership No.", key: "membershipNo" },
  {
    label: "Member Name",
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.image} alt={row.name} />
        <div>
          <p className="text-[#272963] font-medium">{row.name}</p>
          <p
            className={`text-xs mt-1 ${
              row.status === "Active"
                ? "text-[#00A664]"
                : "text-[#EC2308]"
            }`}
          >
            {row.status}
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Connections From",
    render: (row) => (
      <div className="flex items-center gap-3">
        <img
          src={row.connection.image}
          alt={row.connection.name}
        />
        <div>
          <p className="text-[#272963] font-medium text-sm">
            {row.connection.name}
          </p>
          <p className="text-xs text-[#7C7C7C]">{row.connection.title}</p>
        </div>
      </div>
    ),
  },
  { label: "Join Date", key: "joinDate" },
  {
    label: "Total Leads",
    render: (row) => (
      <span className="text-[#272963] font-medium">{row.leads} Leads</span>
    ),
  },
  {
    label: "",
    align: "right",
    render: () => (
      <button className="border border-[#7C7C7C] text-[#272963] text-sm px-5 py-1.5 rounded-md hover:bg-gray-100">
        View
      </button>
    ),
  },
];

const MembersMain = () => {
  return (
    <OverviewTabel
      title="Members"
      buttonLabel="View all"
      columns={columns}
      rows={members}
    />
  );
};

export default MembersMain;