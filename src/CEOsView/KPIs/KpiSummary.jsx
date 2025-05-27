import React from 'react'
import KpiCard from './KpiCard';

const KpiSummary = () => {
  return (
    <div className="flex gap-4">
      <KpiCard label="Total Members" value="500" />
      <KpiCard label="Total Commissions" value="40.6m" />
    </div>
  );
};

export default KpiSummary;
