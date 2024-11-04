import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import FoodCards from "./FoodCards";

const Popular = () => {
  return (
    <div className="bg-[#FBF7F2] ">
      <div className="container mx-auto pt-10 p-10 ">
        <div className="flex justify-between">
          <div>
            <p className="text-red-700 text-sm font-bold">
              Crispy, Every Bite Taste
            </p>
            <h2 className="mt-3 text-4xl font-semibold font-bebas">
              POPULAR FOOD ITEMS
            </h2>
          </div>
          <div className="flex gap-3">
            <div class="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40">
              <IoIosArrowForward className="text-red-700 text-2xl" />
            </div>
            <div class="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40">
              <IoIosArrowBack className="text-red-700 text-2xl" />
            </div>
          </div>
        </div>

        <div>
          <FoodCards />
        </div>
      </div>
    </div>
  );
};

export default Popular;
