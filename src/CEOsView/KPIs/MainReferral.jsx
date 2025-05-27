import React from "react";
import backgroundImg from "../../assets/referralbg.jpg";
import { useNavigate } from "react-router-dom";
import { FiCircle } from "react-icons/fi"; // or use your own SVG

const MainReferral = () => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex justify-between">
        <div>
          <h2 className="text-white text-xl font-medium leading-snug">
            CEO’s Members{" "}
          </h2>
          <p className="text-white text-base mt-2">Total 2.878</p>
        </div>

        <div>
          <button
            onClick={() => navigate("/")}
            className="bg-[#E35F27] hover:bg-[#d34e1f] text-white text-md  px-6 py-2 rounded-md transition flex items-center gap-2"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainReferral;
