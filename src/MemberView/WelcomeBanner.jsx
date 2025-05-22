import React from "react";
import bannerImage from "../assets/welcomeBanner.jpg";
import { FiCircle } from "react-icons/fi"; // or use your own SVG
import { useNavigate } from "react-router-dom";

const WelcomeBanner = () => {
    const navigate = useNavigate();


  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden shadow-md bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 h-full bg-black/60">
        <div>
          <h2 className="text-white font-poppins text-[28px] font-[500] tracking-wide">
            WELCOME TO PSI CLUB MEMBERSHIP!
          </h2>
          <p className=" font-poppins text-white text-2xl font-[400] italic mt-2">
            To Start Your Journey,{" "}
            <span className="text-[#FF7D45] font-brittany ">
              Please Refer Your Client
            </span>
          </p>
        </div>

        <div className="self-end">
          <button  onClick={() => navigate("/add-client")} className="bg-[#E35F27] hover:bg-[#d34e1f] text-white text-md  py-2 px-5 rounded-md transition flex items-center gap-2">
            <FiCircle size={18} className="stroke-white" />
            Refer Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
