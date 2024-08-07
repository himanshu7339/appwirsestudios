import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar bg-black h-5 lg:h-7 flex justify-center lg:justify-start items-center ">
      <div className="small-circle-container flex justify-center items-center flex-row gap-2 lg:ml-5">
        <div className="w-3 h-3  bg-[#0061E0] rounded-full"></div>
        <div className="w-3 h-3  bg-[#0061E0] rounded-full"></div>
        <div className="w-3 h-3  bg-[#0061E0] rounded-full"></div>
      </div>
    </div>
  );
};

export default TopBar;
