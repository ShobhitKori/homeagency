import React from "react";

const VideoReel = () => {
  return (
    <div className="flex flex-col lg:flex-row text-custom-brown bg-beige lg:px-32 md:px-16 sm:px-8 px-4 pt-36 gap-36 pb-28">
      <div className="relative w-full flex justify-center">
        <img src="./video.png" alt="video" className="w-full max-w-[900px]" />

        {/* Play Button - centered on the video */}
        <img
          src="./play.png"
          alt="play"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-24"
        />

        {/* Time Icon - positioned near bottom left */}
        <img
          src="./time.png"
          alt="time"
          className="absolute bottom-1 left-20 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-24"
        />
      </div>

      <div>
        <p className="text-custom-orange py-8 text-2xl">VIDEO REEL</p>
        <h1 className="text-6xl font-bold w-full">
          Unlock The Greatest Value Possible{" "}
        </h1>
        <p className="text-[#391400A3] py-8 text-2xl">
          Design, business understanding, ability to put themselves in the
          merchant's shoes meant to partner.
        </p>
      </div>
    </div>
  );
};

export default VideoReel;
