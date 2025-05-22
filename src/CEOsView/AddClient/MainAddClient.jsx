import React from "react";
import Header from "./Header";
import Layout from "../../Layout/layout";
import ReferClientForm from './Inputs';

const ChairmanAddClient = () => {
  return (
    <Layout>
      <div className="p-6 space-y-10">
        <Header />
        <ReferClientForm />
      </div>
    </Layout>
  );
};

export default ChairmanAddClient;
