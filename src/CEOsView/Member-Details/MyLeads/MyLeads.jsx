import React from "react";
import Header from "./Header";
import ReferralCard from "../../../Reuse/MyAllReferrals/Card";

const MyLeads = () => {
  const dummyData = [
    {
      id: 1,
      date: "12/12/2025",
      name: "Mostafa Hamdy",
      phone: "+971 45678 5678",
      email: "Demo123@gmail.com",
      budget: "500K - 6.5M",
      agent: "Bojana Popovic",
      type: "Studio",
      location: "Al Reem, Abu Dhabi",
      added: "1/02/2025",
      status: "Open",
      activeStageIndex: 0, // "Communication Stage" is active
      stages: [
        { label: "Communication Stage" },
        { label: "Viewing Stage" },
        { label: "Closed Deal Or Hold" },
      ],
    },
    {
      id: 2,
      date: "12/12/2025",
      name: "Mostafa Hamdy",
      phone: "+971 45678 5678",
      email: "Demo123@gmail.com",
      budget: "500K - 6.5M",
      agent: "Bojana Popovic",

      type: "Studio",
      location: "Al Reem, Abu Dhabi",
      added: "1/02/2025",
      status: "Closed",
      activeStageIndex: 1, // "Viewing Stage" is active
      stages: [
        { label: "Communication Stage" },
        { label: "Viewing Stage" },
        { label: "Closed Deal Or Hold" },
      ],
    },
    {
      id: 3,
      date: "12/12/2025",
      name: "Mostafa Hamdy",
      phone: "+971 45678 5678",
      email: "Demo123@gmail.com",
      budget: "500K - 6.5M",
      agent: "Bojana Popovic",

      type: "Studio",
      location: "Al Reem, Abu Dhabi",
      added: "1/02/2025",
      status: "Closed",
      activeStageIndex: 2, // "Closed Deal Or Hold" is active
      stages: [
        { label: "Communication Stage" },
        { label: "Viewing Stage" },
        { label: "Closed Deal Or Hold" },
      ],
    },
    {
      id: 4,
      date: "12/12/2025",
      name: "Mostafa Hamdy",
      phone: "+971 45678 5678",
      email: "Demo123@gmail.com",
      budget: "500K - 6.5M",
      type: "Studio",
      agent: "Bojana Popovic",
      location: "Al Reem, Abu Dhabi",
      added: "1/02/2025",
      status: "Closed",
      activeStageIndex: 2, // "Closed Deal Or Hold" is active
      stages: [
        { label: "Communication Stage" },
        { label: "Viewing Stage" },
        { label: "Closed Deal Or Hold" },
      ],
    },
  ];
  return (
    <div className="space-y-8"> 
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {dummyData.map((referral) => (
          <ReferralCard key={referral.id} data={referral} />
        ))}
      </div>
    </div>
  );
};

export default MyLeads;
