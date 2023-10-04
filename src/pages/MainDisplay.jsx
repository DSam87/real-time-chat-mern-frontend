import React from "react";
import Ball from "./Ball";

const MainDisplay = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center align-middle rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-900 to-purple-950 mx-auto ">
      {children}
    </div>
  );
};

export default MainDisplay;
