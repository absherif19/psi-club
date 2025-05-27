import React from "react";
import Layout from "../../Layout/layout";
import Header from "./Header";
import MainInfo from "./MainInfo";
import { useLocation } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import UnitDetails from "./UnitDetails";
import LeadDetails from "./LeadDetails";
import Activities from "./Activities";
import ConnectionsInfo from "./ConnectionsInfo";

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
        <MainInfo status={state.status} name={state.name} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <ContactDetails
            details={{
              contactClass: "Normal",
              leadClass: "Buyer",
              leadName: "NA",
              mobile: "+971 50 000 0000",
              email: "mostafahamdy@psinv.net",
            }}
          />
                    <ConnectionsInfo
            agentName="Bojana Popovic"
            activeStageIndex={1}
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

        </div>

        <Activities />
      </div>
    </Layout>
  );
};

export default MainAllDetails;
