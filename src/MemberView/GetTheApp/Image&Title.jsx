import React from 'react';
import GetTheApp from '../../assets/GetTheApp.png'; // adjust path as needed

const ImageTitle = () => {
  return (
    <div className="w-full mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Left Text */}
      <div className="lg:w-1/3 flex justify-end">
        <div className="text-[#111954] opacity-60 text-base leading-relaxed text-center lg:text-left max-w-[320px]">
          <p>
            Take control of your real estate journey with our app. Whether you're booking a viewing,
            tracking your property progress, or staying updated on the latest listings, everything
            you need is at your fingertips. <br />
            Download the app now and start your journey today!
          </p>
        </div>
      </div>

      {/* Centered Image */}
      <div className="w-full lg:w-[740px] flex justify-center">
        <img src={GetTheApp} alt="App Preview" className="w-full max-w-[740px]" />
      </div>

      {/* Right Text */}
      <div className="lg:w-1/3 flex justify-center">
        <div className="text-center lg:text-left">
          <p className="text-[#E46027] font-brittany text-3xl mb-2">Start your journey today</p>
          <p className="text-[#111954] text-[20px] font-medium">with just one tap.</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTitle;
