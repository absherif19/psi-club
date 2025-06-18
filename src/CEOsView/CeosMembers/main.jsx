import React from "react";
import Layout from "../../Layout/layout";
import TeamSummary from "./TeamSummary";
import UseableHeader from "../../Reuse/UseableHeader";
import MainTabelView from "./Tabel/Main";

const CeoMembersMain = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <UseableHeader>CEO’s Members</UseableHeader>
        <TeamSummary />
        <MainTabelView />
      </div>
    </Layout>
  );
};

export default CeoMembersMain;
