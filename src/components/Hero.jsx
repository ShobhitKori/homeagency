import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row pt-8 bg-custom-purple py-5 text-white items-center justify-between lg:px-32 md:px-16 sm:px-8 px-4">
      {/* HEADING */}
      <div className="lg:w-1/2 relative">
        <p className="text-custom-orange pb-10">MODERN STUDIO</p>
        <img src="./Star.png" alt="star" className="absolute top-6 left-80 z-10 pointer-events-none"/>
        <h1 className="text-white text-9xl font-bold z-10 relative">We're Help <br /> To Build Your <br />Dream Project</h1>
        <p className="text-gray-400 py-10">
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
        <div className="flex items-center justify-center md-items-start md:justify-start">
          <button className="bg-custom-orange rounded text-white p-4 ">HOW WE WORK </button>
          <a href="#" className="text-white ml-5 hover:cursor-pointer">Contact Us</a>
        </div>
        <div className="flex py-8">
        <img src="./Bitmap.png" alt="Bitmap" />
        <div className="pl-4">
          <p className="text-gray-400">"Put themselves in the merchant's shoes"</p> 
          <p>&nbsp;&nbsp;Meta Inc.</p>
        </div>
      </div>
      </div>
      {/* IMAGES */}
      <div>
        <img src="./pic.png" alt="pic" />
      </div>
    </div>
  );
};

export default Hero;
