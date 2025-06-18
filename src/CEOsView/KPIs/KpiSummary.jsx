import React from 'react'
import KpiCard from './KpiCard';
import { Navigate, useNavigate } from 'react-router-dom';

const KpiSummary = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <KpiCard label="Total Members" value="500" />
      <KpiCard onClick={() => Navigate("/total-commissions")} label="Total Commissions" value="40.6m" />
    </div>
  );
};

export default KpiSummary;
