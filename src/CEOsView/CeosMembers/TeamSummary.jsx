import React from "react";
import ReactECharts from "echarts-for-react";

const TeamSummary = () => {
  const total = 57;

  const people = [
    { name: "Feras Abu Laila - Abu Dhabi", value: 20 },
    { name: "Neven - Abu Dhabi", value: 15 },
    { name: "Yassen - Dubai", value: 12 },
    { name: "Amer Amer - Dubai", value: 10 },
  ];

  const colors = ["#365A9D", "#E06B2F", "#44D7A8", "#6E50A1"];

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "3%",
      top: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLabel: { fontSize: 12 },
    },
    yAxis: {
      type: "category",
      data: people.map((p) => p.name),
      axisLabel: { fontSize: 14, color: "#1C2C5B" },
    },
    series: [
      {
        type: "bar",
        data: people.map((p) => p.value),
        itemStyle: {
          color: (params) => colors[params.dataIndex],
          borderRadius: [4, 4, 4, 4],
        },
        label: {
          show: true,
          position: "insideLeft",
          fontWeight: "bold",
          color: "#fff",
        },
        barWidth: 28,
      },
    ],
  };

  return (
    <div className="bg-white sectionsShadow rounded-3xl p-10 w-full mx-auto">
      <h2 className="text-2xl font-semibold text-[#343C6A] mb-8">
        Total <span className="text-[#E06B2F]">{total}</span>
      </h2>
      <ReactECharts option={option} style={{ height: "250px", width: "100%" }} />
    </div>
  );
};

export default TeamSummary;
