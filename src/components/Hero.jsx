import React from "react";
import HeroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-24 xl:max-w-6xl p-5 pb-10">
      <div className="w-full h-64 lg:w-1/2 lg:h-auto ">
        <img className="h-full w-full object-cover" src={HeroImg} alt="" />
      </div>

      <div className="max-w-lg md:max-w-2xl md:z-10  md:absolute md:top-0 md:mt-48 lg:left-0 lg:mt-20 xl:mt-24 mb-10">
        <div className=" bg-red-600 bg-opacity-50 ">
          <div className="flex flex-col p-2 md:pr-8 ">
            <h2 className="text-white text-3xl font-bebas font-medium uppercase lg:text-7xl">
              Taste the authentic Saudi cuisine
            </h2>
          </div>
        </div>
        <p className="mt-4 text-white w-96">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>

        <div className="flex items-center space-x-1 mt-8">
          <a
            href=""
            className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 font-semibold text-black rounded transition duration-300"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
