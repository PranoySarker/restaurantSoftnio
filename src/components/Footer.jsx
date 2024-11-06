import React from "react";
import FooterBg from "../assets/footer_bg.jfif";
import { IoMdTime } from "react-icons/io";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center "
        style={{ backgroundImage: `url(${FooterBg})` }}
      >
        <div className="absolute inset-0  bg-black opacity-70"></div>

        <div className="relative z-10 p-10">
          <h1 className="text-4xl text-white text-center font-bebas mt-10">
            We ready to have you the best dining experiences
          </h1>
          <div className="max-w-screen-lg  sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div className="p-5 flex flex-col justify-center items-center">
              <IoMdTime className="text-yellow-500 text-2xl mb-2" />
              <h6 className="uppercase text-xl font-bebas text-white">
                Opening hours
              </h6>
              <p className="text-white ">Monday - Sunday</p>
              <p className="text-white ">9:00 AM to 11:30 PM</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center">
              <BsTelephoneInbound className="text-yellow-500 text-2xl mb-2" />
              <h6 className="uppercase text-xl font-bebas text-white">
                LET'S TALK
              </h6>
              <p className="text-white ">Phone: 1-800-222-4545</p>
              <p className="text-white ">Fax: 1-800-222-4545</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center">
              <MdMailOutline className="text-yellow-500 text-2xl mb-2" />
              <h6 className="uppercase text-xl font-bebas text-white">
                BOOK A TABLE
              </h6>
              <p className="text-white ">Email: demo@website.com</p>
              <p className="text-white ">Support:support@website.com</p>
            </div>
            <div className="p-5 flex flex-col justify-center items-center">
              <SlLocationPin className="text-yellow-500 text-2xl mb-2" />
              <h6 className="uppercase text-xl font-bebas text-white">
                Our Address
              </h6>
              <p className="text-white ">123 Stree New York City ,</p>
              <p className="text-white "> United States Of America.</p>
            </div>
          </div>
          <div
            className="flex pb-5 px-3 m-auto pt-5  text-sm flex-col
      max-w-screen-lg items-center text-white"
          >
            <div className="md:flex-auto md:flex-row mt-2 flex-row flex gap-2">
              <a
                href="/#"
                className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="/#"
                className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
              >
                <FaSquareXTwitter className="text-2xl" />
              </a>
              <a
                href="/#"
                className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
              >
                <FaSquareInstagram className="text-2xl" />
              </a>
              <a
                href="/#"
                className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <div className="my-5">
              © 2023 <span className="text-yellow-500">Niomax</span> All Rights
              Reserved{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
