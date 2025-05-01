import React from "react";

const Stats = () => {
  return (
    <div className="bg-beige lg:px-32 md:px-16 sm:px-8 px-4">
      <div className=" flex flex-col sm:flex-col lg:flex-row items-center justify-between text-custom-brown border border-dark-beige rounded-md divide-dark-beige divide-y lg:divide-y-0 lg:divide-x">
        <div className="p-16 flex-1 ">
          <h1 className="font-bold text-5xl">42%</h1>
          <p className="text-2xl">Years of experience</p>
        </div>
        <div className="p-16 flex-1">
          <h1 className="font-bold text-5xl">73+</h1>
          <p className="text-2xl">Agency Members</p>
        </div>
        <div className="p-16 flex-1">
          <h1 className="font-bold text-5xl">5.000</h1>
          <p className="text-2xl">Projects completes</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
