import React from "react";
import AppStore from "../../assets/AppStore.svg";
import GooglePlay from "../../assets/GooglePlay.svg";

const TheApps = () => {
  return (
    <div className="flex flex-col gap-3 items-center mb-12">
      <h1 className="text-2xl text-[#111954] font-medium">
        Available on App Store and Google Play
      </h1>
      <div className="flex gap-3 items-center">
        <a
          href="https://apps.apple.com/us/app/psi-real-estate/id6736644035"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AppStore} className="w-38 h-12" alt="AppStore" />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.psi.psirealestate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GooglePlay} className="w-38 h-12" alt="GooglePlay" />
        </a>
      </div>
    </div>
  );
};

export default TheApps;
