import React from "react";
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

const columns = [
  {
    label: "#",
    render: (_, index) => String(index + 1).padStart(2, "0"),
  },
  {
    label: "Name",
    render: (row) => (
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={row.name}
        />
        <span className="text-[#1E222E]">{row.name}</span>
      </div>
    ),
  },
  {
    label: "Referral by :",
    render: (row) => (
      <div className="flex items-center gap-3">
        <img
          src={row.referredByImage}
          alt={row.referredBy}
        />
        <span className="text-[#1E222E]">{row.referredBy}</span>
      </div>
    ),
  },
  { label: "Date", key: "date" },
  { label: "Nationality", key: "nationality" },
  {
    label: "",
    align: "right",
    render: () => (
      <div className="flex justify-end items-center gap-2">
        <button className="bg-[#00A664] text-white text-xs px-4 py-2 rounded-md">
          Accept
        </button>
        <button className="bg-[#ABABAB] text-white text-xs px-4 py-2 rounded-md">
          Reject
        </button>
      </div>
    ),
  },
];

const MainRequests = () => {
  return (
    <OverviewTabel
      title="Membership Requests"
      buttonLabel="View all"
      columns={columns}
      rows={requests}
      containerStyles="bg-white rounded-3xl border border-[#E35F27] overflow-hidden sectionsShadow"
    />
  );
};

export default MainRequests;
