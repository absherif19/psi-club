import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

const OverviewChart = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const values = [
    50000, 550000, 600000, 600000, 300000,
    1297564, 350000, 500000, 450000, 400000, 600000, 900000
  ];

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: function (params) {
        const value = params[0].value.toLocaleString();
        return `
          <div style="padding:6px 10px">
            <strong style="font-size:16px;">${value}m <span style="color:#10B981;">AED</span></strong><br/>
            <span style="font-size:12px;color:gray;">12/4/${selectedYear}</span>
          </div>
        `;
      },
    },
    grid: {
      left: 50,
      right: 20,
      bottom: 40,
      top: 30,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: months,
      axisLabel: {
        fontWeight: 500,
        fontSize: 12,
      }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: function (value) {
          if (value >= 1000000) return value / 1000000 + "m";
          if (value >= 1000) return value / 1000 + "k";
          return value;
        }
      }
    },
    series: [
      {
        data: values,
        type: "bar",
        barWidth: "35%",
        itemStyle: {
          borderRadius: [10, 10, 0, 0],
          color: function (params) {
            // Highlight one month (June)
            return params.dataIndex === 5 ? "#E35F27" : "#7E57C2";
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl sectionsShadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-[#1C2C5B]">Overview</h2>
          <p className="text-sm text-gray-400">
            Last Week <span className="text-[#10B981] font-medium">890k AED</span>
          </p>
        </div>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none"
        >
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>

      <ReactECharts
        option={option}
        style={{ height: 300, width: "100%" }}
      />
    </div>
  );
};

export default OverviewChart;
