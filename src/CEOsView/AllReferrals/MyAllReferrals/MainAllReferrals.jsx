import React from "react";
import Header from "./Header";
import ReferralGrid from "./Grid";
import Layout from "../../../Layout/layout";

const ChairmanReferralMain = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <Header />
        <ReferralGrid />
      </div>
    </Layout>
  );
};

export default ChairmanReferralMain;
