import React from "react";
import Layout from "../../Layout/layout";
import Header from "./Header";
import MainInfo from "./MainInfo";
import { useLocation } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import UnitDetails from "./UnitDetails";
import LeadDetails from "./LeadDetails";
import Activities from "./Activities";

const MainAllDetails = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="p-6 text-center text-red-500">No lead data provided.</div>
    );
  }

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <Header />
        <MainInfo
          date={state.date}
          name={state.name}
          buyerId={state.id}
          activeStageIndex={state.activeStageIndex}
          stages={state.stages}
        />
        <ContactDetails
          details={{
            contactClass: "Normal",
            leadClass: "Buyer",
            leadName: "NA",
            mobile: "+971 50 000 0000",
            email: "mostafahamdy@psinv.net",
          }}
        />
        <UnitDetails
          details={{
            unitId: "123456789",
            location: "Abu Dhabi",
            type: "Apartment",
            bedroom: 3,
            bathroom: 2,
            budget: "10,000",
          }}
        />
        <LeadDetails
          details={{
            status: "Closed",
            rating: "Warm",
            lastActivity: "New Lead Added - CRM",
            stage: "New",
            source: "--",
          }}
        />
        {/* <Activities /> */}
      </div>
    </Layout>
  );
};

export default MainAllDetails;
