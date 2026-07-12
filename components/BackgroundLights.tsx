import React from "react";

const BackgroundLights = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div
      className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/20 blur-[130px] animate-pulse"
      style={{ animationDuration: "8s" }}
    ></div>
    <div
      className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-600/20 blur-[130px] animate-pulse"
      style={{ animationDuration: "10s", animationDelay: "1s" }}
    ></div>
    <div
      className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"
      style={{ animationDuration: "12s", animationDelay: "2s" }}
    ></div>
    <div
      className="absolute top-[20%] right-[20%] w-[25%] h-[25%] rounded-full bg-amber-500/15 blur-[100px] animate-pulse"
      style={{ animationDuration: "9s", animationDelay: "3s" }}
    ></div>
  </div>
);

export default BackgroundLights;
