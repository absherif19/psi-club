import React from "react";
import Layout from "../Layout/layout";
import MemberKPI from "./KPIs/MemberKPI";
import CommissionKPI from "./KPIs/CommissionsKPI";
import MainReferral from "./Referral/MainReferral";
import MainRequests from "./Requests/MainRequests";
import MembersMain from './Members/MembersMain';
import MainAllReferrals from "./AllReferrals/MainAllReferrals";

const ChairmanView = () => {
  return (
    <Layout>
      <div className="p-6 space-y-10">
        <div className="flex space-x-10">
          <MemberKPI />
          <CommissionKPI />
          <MainReferral />
        </div>

        <MainRequests />
        <MembersMain />
        <MainAllReferrals />
      </div>
    </Layout>
  );
};

export default ChairmanView;
