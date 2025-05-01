import React from "react";

const HowWeWork = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-custom-brown bg-beige lg:px-32 md:px-16 sm:px-8 px-4 pt-28 gap-32 py-32 pt-32" >
        <div>
          <p className="text-custom-orange py-8 text-2xl">HOW WE WORK</p>
          <h1 className="text-6xl font-bold w-full">
            Making Your Projects Look Awesome
          </h1>
          <p className="text-[#391400A3] py-8 text-2xl">
            Technical skills, design, business understanding, ability to put
            themselves in the merchant's shoes.
          </p>
          <a href="#" className="text-2xl">READ MORE</a>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-8">
          {[
            { num: "1", text: "Full service range including" },
            { num: "2", text: "Technical skills, design, business" },
            { num: "3", text: "Themselves in the merchant's" },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-8">
              <h1 className="text-7xl font-bold">{item.num}</h1>
              <p className="text-3xl font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-beige lg:px-32 md:px-16 sm:px-8 px-4">
        <hr className="border-dark-beige " />
      </div>
    </>
  );
};

export default HowWeWork;
