import React, { useState } from "react";
import Title from "./Title";
import Filters from "./Filters";
import CommissionsTable from "./CommissionsTable";
import Layout from "../../Layout/layout";

const mockData = [
  {
    name: "Olivia Rhye",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "olivia@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Phoenix Baker",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "phoenix@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Lana Steiner",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "lana@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Demi Wilkinson",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    transactionId: "509857432",
    status: "Inactive",
    mobile: "509875432",
    email: "demi@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Candice Wu",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    transactionId: "509857432",
    status: "Inactive",
    mobile: "509875432",
    email: "candice@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Natai Craig",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "natai@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "drew@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "orlando@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "andi@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "kate@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Olivia Rhye",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "olivia@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Phoenix Baker",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "phoenix@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Lana Steiner",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "lana@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Demi Wilkinson",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    transactionId: "509857432",
    status: "Inactive",
    mobile: "509875432",
    email: "demi@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Candice Wu",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    transactionId: "509857432",
    status: "Inactive",
    mobile: "509875432",
    email: "candice@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Natai Craig",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "natai@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "drew@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "orlando@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
  {
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "andi@untitledui.com",
    commission: "30k",
    action: "Paid",
  },
  {
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    transactionId: "509857432",
    status: "Active",
    mobile: "509875432",
    email: "kate@untitledui.com",
    commission: "30k",
    action: "In progress",
  },
];
const TotalCommissionsPage = () => {
  const [currentTab, setCurrentTab] = useState("All");

  const filteredData = mockData.filter((item) =>
    currentTab === "All" ? true : item.action === currentTab
  );

  return (
        <Layout>

    <div className="p-6 space-y-6">
      <Title />
      <Filters currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <CommissionsTable data={filteredData} />
    </div>
    </Layout>
  );
};

export default TotalCommissionsPage;
