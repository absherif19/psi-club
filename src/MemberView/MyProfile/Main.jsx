import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Layout from "../../Layout/layout";
import MainGeneralInfo from "./GenralInfo/Main";
import MainPaymentInfo from "./PaymentInfo/Main";

const MainMyProfile = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Layout>
      <div className="p-6 space-y-10">
        <Header />
        <div className="flex gap-6">
          <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="w-full">
            {activeTab === "general" && <MainGeneralInfo />}
            {activeTab === "payment" && <MainPaymentInfo />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainMyProfile;
