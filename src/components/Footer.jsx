import React from "react";

const Footer = () => {
  return (
    <div>
    <div className="flex lg:flex-row flex-col text-custom-brown bg-beige lg:px-32 md:px-16 sm:px-8 px-4 pt-28 py-32 justify-items-center w-full">
      <div className="text-4xl font-bold w-1/4">
        <a href="/">Agency</a>
      </div>
      <div className="flex flex-col text-2xl space-y-4 w-1/4">
        <p className="text-custom-orange pb-12">Menu</p>
        <a href="#" className="">
          About
        </a>
        <a href="#" className="">
          Service
        </a>
        <a href="#" className="">
          Blog
        </a>
        <a href="#" className="">
          Contact
        </a>
      </div>
      <div className="flex flex-col text-2xl space-y-4 w-1/4">
        <p className="text-custom-orange pb-12">Service</p>
        <a href="#" className="">
          Design
        </a>
        <a href="#" className="">
          Development
        </a>
        <a href="#" className="">
          Marketing
        </a>
        <a href="#" className="">
          See More
        </a>
      </div>
      <div className="flex justify-end w-1/4">
        <a href="#">
          <img src="./social.png" alt="" />
        </a>
      </div>
    </div>
      <div className=" bg-beige lg:px-32 md:px-16 sm:px-8 px-4">
        <hr className="border-dark-beige " />
      </div>
      <div className="flex lg:flex-row flex-col text-custom-brown bg-beige lg:px-32 md:px-16 sm:px-8 px-4 pt-28 py-32 justify-between w-full text-2xl">
        <div>
          <p>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
        </div>
        <div>
          <a href="#" className="pr-32">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
