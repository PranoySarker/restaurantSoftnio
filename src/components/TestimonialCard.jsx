import React from "react";

import VideoImg from "../assets/videopic.png";

const TestimonialCard = ({ testimonial }) => {
  const { quote, author, img } = testimonial;
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row md:items-stretch mt-10">
          <div className="bg-yellow-500 p-10">
            <blockquote className="text-black text-xl   mb-8">
              <span className="text-2xl font-poppins text-black">“</span>
              {quote}
            </blockquote>
            <div className="flex items-center mt-32">
              <div className="flex-grow">
                <p className="text-black font-bold">{author}</p>
                <p className="text-black text-sm">Jeddah, Saudi</p>
              </div>
              <div className="flex gap-2 flex-col items-center">
                <img
                  src={img}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full border border-black mr-2"
                />
                <div className="border-b-2 border-red-700 w-16"></div>
              </div>
            </div>
            <hr className="h-px bg-gray-700 border-0 dark:bg-gray-700"></hr>
          </div>

          <div className="flex-shrink-0 self-stretch ">
            <img className="h-full w-full object-cover" src={VideoImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
