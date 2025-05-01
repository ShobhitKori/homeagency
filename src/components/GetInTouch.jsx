import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
  return (
    <div className="relative">
      <img src="./map.png" alt="map" className="w-full" />
      <div className="hidden sm:block">
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{
            color: "#EF6D58",
            fontSize: "30px",
            top: "50%",
            left: "0%",
            transform: "translate(-50%, 50%)",
          }}
          className="absolute text-[#EF6D58]"
        />
      </div>
      <div className="flex justify-center sm:hidden">
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{
            color: "#EF6D58",
            fontSize: "30px",
            top: "13%",
            left: "60%",
            transform: "translate(-50%, 50%)",
          }}
          className="absolute text-[#EF6D58]"
        />
      </div>

      <div className="bg-white p-8 sm:p-16 rounded-md w-full sm:w-2/3 lg:w-1/3 sm:absolute sm:top-60 sm:left-32">
        <form className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold pb-4">Get In Touch</h1>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            className="pb-4 border rounded-lg border-[#F3D1BF] text-3xl pt-3 pl-3"
          />
          <input
            type="email"
            name="text"
            id=""
            placeholder="Subject"
            className="pb-4 border rounded-lg border-[#F3D1BF] text-3xl pt-3 pl-3"
          />
          <textarea
            type="email"
            name="text"
            id=""
            placeholder="Message"
            className="pb-4 border rounded-lg border-[#F3D1BF] text-3xl pt-3 pl-3"
          />
          <div className="flex justify-end">
            <button className="bg-custom-orange font-bold rounded-lg text-white px-4 py-4 w-1/3 ">
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;

//tyle={{ top: "50%", left: "60%", fontSize: "24px", transform: "translate(-50%, -50%)" }}
