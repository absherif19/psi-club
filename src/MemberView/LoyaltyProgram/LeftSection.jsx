import React from "react";
import { FiCircle } from "react-icons/fi"; // or use your own SVG

const LeftSection = () => {
  return (
    <div className="lg:w-1/2 h-full flex flex-col">
      {/* Content at the top */}
      <div className="space-y-6">
        <h2 className="text-4xl font-medium text-white">PSI Loyalty Program</h2>
        <p className="text-2xl font-brittany text-[#FF7D45] font-normal">
          Beyond Real Estate. Beyond Limits.
        </p>
        <p className="text-sm text-white leading-relaxed max-w-xl">
          The PSI Loyalty Program offers exclusive discounts from trusted
          service providers to PSI clients. From furniture and landscaping to
          home services, moving services, tourism, hospitality, interior design,
          and more, we’ve partnered with top vendors to make your move-in
          experience smoother and more affordable.
        </p>
      </div>

      {/* Button pushed to bottom */}
      <button className="mt-auto bg-[#EB5E28] hover:bg-[#d34e1f] text-white flex items-center gap-6 py-2 px-4 rounded-md transition w-fit">
        <FiCircle size={18} className="stroke-white" />
       Visit Now
      </button>
    </div>
  );
};

export default LeftSection;
