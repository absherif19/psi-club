import React from "react";
import Layout from "../../Layout/layout";
import Header from "./Header";
import Tabel from "./Tabel";

const MainRequests = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <Header />
        <Tabel />
      </div>
    </Layout>
  );
};

export default MainRequests;
