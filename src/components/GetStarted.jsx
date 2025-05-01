import React from "react";

const GetStarted = () => {
  return (
    <div className="relative">
      {/* Stargift Image */}
      <div className="absolute z-10 left-8 sm:left-20 md:left-36 lg:left-52">
        <img src="./stargift.png" alt="" className="mt-[-70px] " />
      </div>

      {/* Main Section */}
      <div className="relative flex lg:flex-row flex-col text-custom-brown bg-beige lg:mx-32 md:mx-16 sm:px-8 px-4 pt-12 gap-12 rounded-lg overflow-visible">
        {/* Text Section */}
        <div className="pl-16 w-full lg:w-1/3">
          <p className="text-custom-orange py-8 text-2xl">GET STARTED</p>
          <h1 className="text-5xl font-bold w-full mb-8">
            We Help Companies Move Faster
          </h1>
          <a href="#" className="bg-custom-orange rounded text-white p-4">
            CONTACT US
          </a>
        </div>

        {/* Block Image */}
        <img
          src="./block.png"
          alt=""
          className="w-full lg:w-1/3 h-[400px] object-contain"
        />

        {/* Girl and Cloud Image Section */}
        <div className="relative w-full lg:w-1/3">
          <img
            src="./cloud.png"
            alt=""
            className="absolute -top-15 left-12 z-10 w-full max-w-[300px]"
          />
          <img
            src="./girl.png"
            alt=""
            className="relative -top-32 left-20 z-20 w-full max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
