import React from "react";
import Layout from "../../Layout/layout";
import UseableHeader from "../../Reuse/UseableHeader";
import OverviewChart from "./Bars";
import MainTransactionHistory from "./TransactionsHistory/Main";

const MainTotalComm = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <UseableHeader>Total Commissions</UseableHeader>
        <OverviewChart />
        <MainTransactionHistory />
      </div>
    </Layout>
  );
};

export default MainTotalComm;
