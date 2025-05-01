import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <div className="  text-custom-brown bg-beige lg:px-32 md:px-16 sm:px-8 px-4 pt-28 gap-32 py-32 pt-32">
      <div>
        <p className="text-custom-orange py-8 text-2xl">PRICING</p>
        <h1 className="text-6xl font-bold w-full">
          Check Our <br />
          Pricing Plans
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row pt-24">
        <div className="border border-[#F3D1BF] rounded-lg p-16 w-1/3">
          <p className="text-custom-orange pb-8 text-2xl">CONSULTATION</p>
          <h1 className="text-5xl font-bold pb-8 w-full">Free</h1>
          <p className="text-[#391400A3] text-2xl pb-8">Your digital marketing efforts, <br /> instead of handling in-house.</p>
          
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCirclePlus} style={{color: "#ef6d62", fontSize: "30px"}} />  <span className="pl-4">Brand Design</span> </p>
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCircleMinus} style={{color: "#F6DACA", fontSize: "30px"}} />  <span className="pl-4">Market Analysis</span> </p>
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCircleMinus} style={{color: "#F6DACA", fontSize: "30px"}} />  <span className="pl-4">Production</span> </p>
        <button className="bg-white font-bold rounded-lg text-2xl px-8 py-4">CONTACT US</button>

        </div>
        <div className="border border-[#F3D1BF] bg-white rounded-lg px-16 pb-16 pt-12 -mt-16 w-1/3">
          <button className="bg-custom-orange rounded-full text-white py-4 px-8 mb-4">Popular</button>
          <p className="text-custom-orange pb-8 text-2xl">DESIGN</p>
          <h1 className="text-5xl font-bold pb-8 w-full">$1500</h1>
          <p className="text-[#391400A3] text-2xl pb-8">Provide your business with a variety <br /> of digital solutions to promote.</p>
          
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCirclePlus} style={{color: "#ef6d62", fontSize: "30px"}} />  <span className="pl-4">Brand Design</span> </p>
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCircleMinus} style={{color: "#F6DACA", fontSize: "30px"}} />  <span className="pl-4">Market Analysis</span> </p>
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCircleMinus} style={{color: "#F6DACA", fontSize: "30px"}} />  <span className="pl-4">Production</span> </p>
        <button className="bg-custom-orange font-bold rounded-lg text-white text-2xl px-8 py-4">CONTACT US</button>
        </div>
        <div className="border border-[#F3D1BF] rounded-lg p-16 w-1/3">
          <p className="text-custom-orange pb-8 text-2xl">CONSULTATION</p>
          <h1 className="text-5xl font-bold pb-8 w-full">Free</h1>
          <p className="text-[#391400A3] text-2xl pb-8">Your digital marketing efforts, <br /> instead of handling in-house.</p>
          
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCirclePlus} style={{color: "#ef6d62", fontSize: "30px"}} />  <span className="pl-4">Brand Design</span> </p>
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCircleMinus} style={{color: "#F6DACA", fontSize: "30px"}} />  <span className="pl-4">Market Analysis</span> </p>
          <p className="text-custom-brown text-2xl pb-8"><FontAwesomeIcon icon={faCircleMinus} style={{color: "#F6DACA", fontSize: "30px"}} />  <span className="pl-4">Production</span> </p>
        <button className="bg-white font-bold rounded-lg text-2xl px-8 py-4">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

          // 