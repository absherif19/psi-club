import React from "react";
import Layout from "../Layout/layout";
import WelcomeBanner from "./WelcomeBanner";
import Overview from "./OverView/Overview";
import MainLoyaltyProgram from './LoyaltyProgram/Main';
import GetTheAppMain from './GetTheApp/Main';
import ReferralsTable from './MyReferrals/ReferralsTable';

const MemberMain = () => {
  return (
    <Layout>
      <div className="p-6 space-y-10">
        {/* Top Section: Banner + Overview */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left: Welcome Banner with title */}
          <div className="w-full lg:w-2/3 h-[280px] space-y-2">
            <h2 className="text-2xl font-semibold text-[#343C6A]">Main Page</h2>
            <WelcomeBanner />
          </div>

          {/* Right: Overview with title */}
          <div className="w-full lg:w-1/3 space-y-2">
            <h2 className="text-2xl font-semibold text-[#343C6A]">Overview</h2>
            <Overview />
          </div>
        </div>

        <ReferralsTable />

        {/* Loyalty Program Section */}
        <MainLoyaltyProgram />

        {/* Get the App Section */}
        <GetTheAppMain />
      </div>
    </Layout>
  );
};

export default MemberMain;
