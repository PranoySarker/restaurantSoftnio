import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container mx-auto ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="#"
                className="flex items-center py-5 px-2 text-white hover:text-gray-200"
              >
                <img src={Logo} alt="" />
                <span className="font-semibold text-2xl ml-2 font-poppins">
                  Restaurant
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
                Portfolio
              </a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
                Clients
              </a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
                Blog
              </a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a
              href=""
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 font-semibold text-black rounded transition duration-300"
            >
              BOOK A TABLE
            </a>
          </div>

          <div className="md:hidden flex items-center text-white">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "block" : "hidden"} md:hidden`}>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
          Portfolio
        </a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
          Clients
        </a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
          Blog
        </a>
        <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
