import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import FoodCards from "./FoodCards";

const Popular = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-[#FBF7F2] ">
      <div className="container mx-auto pt-10 p-10 ">
        <div className="flex justify-between mt-10">
          <div>
            <p className="text-red-700 text-sm font-bold">
              Crispy, Every Bite Taste
            </p>
            <h2 className="mt-3 text-4xl font-semibold font-bebas">
              POPULAR FOOD ITEMS
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            {/* prev */}
            <div
              onClick={() => sliderRef.current.slickPrev()}
              className="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40"
            >
              <IoIosArrowForward className="text-red-700 text-2xl" />
            </div>
            {/* next */}
            <div
              onClick={() => sliderRef.current.slickNext()}
              className="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40"
            >
              <IoIosArrowBack className="text-red-700 text-2xl" />
            </div>
          </div>
        </div>

        <FoodCards settings={settings} sliderRef={sliderRef} />

        <div className="flex justify-center md:hidden">
          {/* prev */}
          <div
            onClick={() => sliderRef.current.slickPrev()}
            className="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40"
          >
            <IoIosArrowForward className="text-red-700 text-2xl" />
          </div>
          {/* next */}
          <div
            onClick={() => sliderRef.current.slickNext()}
            className="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40"
          >
            <IoIosArrowBack className="text-red-700 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
