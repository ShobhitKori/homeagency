import React from "react";

const Portfolio = () => {
  return (
    <div className="text-center py-36">
      <p className="text-2xl text-custom-orange pb-8">PORTFOLIO</p>
      <h1 className="text-white text-6xl font-bold">Latest Work</h1>
      <div className="flex flex-row justify-center text-2xl gap-16 text-gray-400 py-16">
        <a href="#" className="hover:text-white">
          Show All <sup>14</sup>
        </a>
        <a href="#" className="hover:text-white">
          Design <sup>6</sup>
        </a>
        <a href="#" className="hover:text-white">
          Branding <sup>4</sup>
        </a>
        <a href="#" className="hover:text-white">
          Illustration <sup>3</sup>
        </a>
        <a href="#" className="hover:text-white">
          Motion <sup>1</sup>
        </a>
      </div>
      <div className="flex flex-wrap text-custom-brown lg:px-32 md:px-16 sm:px-8 px-4 pt-8 gap-12 pb-28 w-full justify-center">
        <div className="relative">
          <img src="./sofa.png" alt="" className="rounded" />
          <div className="absolute bottom-28 left-10 bg-white px-4 py-1 rounded-full text-custom-brown text-sm font-semibold shadow-md">Design</div>
          <h1 className="absolute bottom-12 left-20 transform -translate-x-1/2 text-white text-3xl font-bold drop-shadow-lg">SOFA</h1>
        </div>
        <div className="relative">
          <img src="./keyboard.png" alt="" className="rounded" />
          <div className="absolute bottom-28 left-10 bg-white px-4 py-1 rounded-full text-custom-brown text-sm font-semibold shadow-md">Branding</div>
          <h1 className="absolute bottom-12 left-28 transform -translate-x-1/2 text-white text-3xl font-bold drop-shadow-lg">KeyBoard</h1>
        </div>
        <div className="relative">
          <img src="./work-media.png" alt="" className="rounded" />
          <div className="absolute bottom-28 left-10 bg-white px-4 py-1 rounded-full text-custom-brown text-sm font-semibold shadow-md">Illustration</div>
          <h1 className="absolute bottom-12 left-32 transform -translate-x-1/2 text-white text-3xl font-bold drop-shadow-lg">Work Media</h1>
        </div>
        <div className="relative">
          <img src="./done.png" alt="" className="rounded" />
          <div className="absolute bottom-28 left-10 bg-white px-4 py-1 rounded-full text-custom-brown text-sm font-semibold shadow-md">Motion</div>
          <h1 className="absolute bottom-12 left-20 transform -translate-x-1/2 text-white text-3xl font-bold drop-shadow-lg">DDone</h1>
        </div>
      </div>
      <a href="#">
        <button className="text-white font-bold border border-gray-600 rounded-lg text-2xl px-8 py-4">EXPLORE MORE</button>
      </a>
    </div>
  );
};

export default Portfolio;
