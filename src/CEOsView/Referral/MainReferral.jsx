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
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-white text-xl font-medium leading-snug">
            WELCOME TO PSI CLUB MEMBERSHIP!
          </h2>
          <p className="text-white text-base mt-2">
            To Start Your Journey,
            <span className="text-[#E35F27] font-brittany italic">
              Please Refer Your Client
            </span>
          </p>
        </div>

        <div className="self-end">
          <button
            onClick={() => navigate("/add-client-chairman")}
            className="bg-[#E35F27] hover:bg-[#d34e1f] text-white text-md  py-2 px-5 rounded-md transition flex items-center gap-2"
          >
            <FiCircle size={18} className="stroke-white" />
            Refer Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainReferral;
