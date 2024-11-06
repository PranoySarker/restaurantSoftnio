import React from "react";
import FoodImg from "../assets/food.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { IoRibbonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import AboutTab from "./AboutTab";

const MidSection = () => {
  return (
    <div className="container mt-20 mx-auto mb-44">
      <div className="md:max-w-full px-14">
        <div className="flex flex-col md:flex-row">
          <div className="">
            <img className="w-full  object-cover" src={FoodImg} alt="" />
          </div>
          <div className="md:px-8 md:w-1/2 mt-10 md:mt-0">
            <AboutTab />

            <div className="flex gap-4 mt-10">
              <a className="px-6 py-2 min-w-[120px] text-center text-xs md:text-base font-semibold text-black bg-yellow-400 border border-yellow-400 rounded-sm cursor-pointer">
                About More
              </a>

              <a className="px-6 py-2 min-w-[120px] text-center text-xs md:text-base text-black font-semibold flex gap-2 items-center cursor-pointer">
                <span className="text-red-500">
                  <FaPhoneVolume />
                </span>{" "}
                +88 3426 739 485
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1 h-28 ">
          <div className="flex gap-2 items-center justify-center w-56 ">
            <div className="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40">
              <LuBox className="text-red-700 text-2xl" />
            </div>
            <div>
              <h6 className="font-bebas text-xl">FAST DELIVERY</h6>
              <p className="font-poppins text-sm text-gray-800">
                Within 30 minutes
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center w-60 ">
            <div className="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40">
              <IoRibbonOutline className="text-red-700 text-3xl" />
            </div>
            <div>
              <h6 className="font-bebas text-xl uppercase">absolute dining</h6>
              <p className="font-poppins text-sm text-gray-800">
                Best buffet restaurant
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center w-56 ">
            <div className="mx-auto flex h-16 w-16  items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40">
              <FiShoppingBag className="text-red-700 text-2xl" />
            </div>
            <div>
              <h6 className="font-bebas text-xl uppercase">pickup delivery</h6>
              <p className="font-poppins text-sm text-gray-800">
                Grab your food order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
