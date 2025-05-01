import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "A digital agency is a business",
    answer:
      "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    question: "Hire to outsource your digital",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, saepe numquam blanditiis quasi placeat recusandae maxime ducimus nostrum quis eveniet quam voluptates totam quidem! Vel impedit eos enim culpa facere.",
  },
  {
    question: "Marketing efforts",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, saepe numquam blanditiis quasi placeat recusandae maxime ducimus nostrum quis eveniet quam voluptates totam quidem! Vel impedit eos enim culpa facere.",
  },
  {
    question: "Can provide your business",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, saepe numquam blanditiis quasi placeat recusandae maxime ducimus nostrum quis eveniet quam voluptates totam quidem! Vel impedit eos enim culpa facere.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-custom-brown bg-beige lg:px-32 md:px-16 sm:px-8 px-4 pt-28 py-32">
      <div className="flex flex-col lg:flex-row gap-32">
        {/* Left Section */}
        <div>
          <p className="text-custom-orange py-8 text-2xl">FAQ</p>
          <h1 className="text-6xl font-bold w-full">Frequently Asked Questions</h1>
          <p className="text-[#391400A3] py-8 text-2xl">
            A digital agency is a business you hire to outsource your digital marketing efforts,
            instead of handling in-house.
          </p>
          <a href="#" className="text-2xl">Contact Us</a>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col lg:w-1/2 gap-4 border rounded-lg border-[#F3D1BF] divide-y divide-[#F3D1BF]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                  isOpen ? "bg-white border border-gray-300" : "bg-transparent"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">{item.question}</h2>
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    style={{ color: "#EF6D58", fontSize: "24px" }}
                  />
                </div>
                {isOpen && (
                  <p className="text-[#391400A3] mt-4 text-xl">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;