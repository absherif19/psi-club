import React from "react";
import barsImage from "../../assets/Chart2.svg";

const CommissionKPI = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-full">
          {/* Top section */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Commissions</p>
              <p className="text-2xl text-green-600 font-semibold">40,6m</p>
            </div>
            <button className="bg-[#E35F27] hover:bg-orange-600 text-white text-sm px-4 py-1 rounded-md">
              Details
            </button>
          </div>
    
          {/* Image Chart */}
          <div className="w-full">
            <img src={barsImage} alt="Members bar chart" className="w-full object-contain" />
          </div>
        </div>
      );
    };
    
export default CommissionKPI
