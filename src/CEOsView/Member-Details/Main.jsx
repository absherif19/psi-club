import React from "react";
import UseableHeader from "../../Reuse/UseableHeader";
import Layout from "../../Layout/layout";
import MemberDetails from "./MemberDetails";
import ContactDetails from "./ContactDetails";
import ConnectionsDetails from "./ConnectionsDetails";
import MyLeads from "./MyLeads/MyLeads";

const MainMemberDetails = () => {
  return (
    <Layout>
      <UseableHeader>Member Details</UseableHeader>
      <MemberDetails />
      <div className="flex gap-6">
        <ContactDetails />
        <ConnectionsDetails />

      </div>
              <MyLeads />
    </Layout>
  );
};

export default MainMemberDetails;
