import React from "react";
import Layout from "../Layout/layout";
import MainReferral from "./KPIs/MainReferral";
import MainRequests from "./OverviewTabels/MainRequests";
import MembersMain from "./OverviewTabels/MembersMain";
import MainAllReferrals from "./OverviewTabels/MainAllReferrals";
import KpiSummary from "./KPIs/KpiSummary";

const ChairmanView = () => {
  return (
    <Layout>
      <div className="p-6 space-y-10">
        <div className="flex space-x-10">
          <MainReferral />
          <KpiSummary />
        </div>

        <div className="space-y-14">
          <MainRequests />
          <MembersMain />
          <MainAllReferrals />
        </div>
      </div>
    </Layout>
  );
};

export default ChairmanView;
