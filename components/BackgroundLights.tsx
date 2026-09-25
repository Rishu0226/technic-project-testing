import React from "react";

const BackgroundLights = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <div className="absolute top-[-12%] left-[-8%] w-[42%] h-[42%] rounded-full bg-technic-cyan/10 blur-[120px]" />
    <div className="absolute bottom-[-14%] right-[-8%] w-[36%] h-[36%] rounded-full bg-technic-orange/10 blur-[120px]" />
  </div>
);

export default BackgroundLights;
