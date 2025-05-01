import React from "react";

const OurTeam = () => {
  return (
    <div className="pb-36">
      <div className=" lg:flex-row text-white lg:px-32 md:px-16 sm:px-8 px-4 pt-28 gap-32 py-32 pt-32">
        <div>
          <p className="text-custom-orange py-8 text-2xl">OUR TEAM</p>
          <h1 className="text-6xl font-bold w-full">
            Team of Designers <br /> and Developers
          </h1>
          <img
            src="./arrow.png"
            alt=""
            className="relative cursor-pointer ml-auto pr-4 -top-12"
          />
        </div>
        <div className="flex gap-8">
          {[
            { img: "./team1.png", name: "Azah Anyani", title: "Designer" },
            {
              img: "./team2.png",
              name: "Roelof Bekkenenks",
              title: "React Developer",
            },
            {
              img: "./team3.png",
              name: "Roelof Bekkenenks",
              title: "Illustrator",
            },
            {
              img: "./team4.png",
              name: "Izabella Tabakova",
              title: "Product Designer",
            },
          ].map((item, idx) => (
            <div className="">
              <div className="border border-gray-600 w-96 rounded-lg justify-items-center pt-4">
                <img
                  src={item.img}
                  alt=""
                  className=" rounded-lg w-auto h-96 "
                />
              </div>
              <h2 className="text-3xl font-bold py-4">{item.name}</h2>
              <p className="text-2xl text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-items-center cursor-pointer ">
        <img src="./pins.png" alt="" className="cursor-pointer hidden sm:block" />
        <img src="./pins2.png" alt="" className="cursor-pointer block sm:hidden" />
      </div>
      <div className="justify-items-center cursor-pointer ">
      </div>
    </div>
  );
};

export default OurTeam;
