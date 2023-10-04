import React from "react";

const WelcomePopup = () => {
  return (
    <div className="w-screen h-screen flex justify-center align-middle items-center bg-black bg-opacity-70 text-gray-900 text-lg font-bold rail absolute">
      <div className="w-[500px] h-[600px] bg-zinc-400 rounded-lg">
        <h2>Real Time Chat</h2>
      </div>
    </div>
  );
};

export default WelcomePopup;
