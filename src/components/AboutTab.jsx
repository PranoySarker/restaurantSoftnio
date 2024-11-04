import React, { useState } from "react";

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <>
      <div className="mb-5 flex flex-row gap-5 font-poppins">
        <a
          onClick={() => setActiveTab("About")}
          className={`uppercase tracking-wide text-sm font-normal p-4 cursor-pointer ${
            activeTab === "About"
              ? "text-white bg-red-700"
              : "text-black hover:bg-red-700 hover:text-white"
          }`}
        >
          About
        </a>
        <a
          onClick={() => setActiveTab("Experience")}
          className={`uppercase tracking-wide text-sm font-normal p-4 cursor-pointer ${
            activeTab === "Experience"
              ? "text-white bg-red-700"
              : "text-black hover:bg-red-700 hover:text-white"
          }`}
        >
          Experience
        </a>
        <a
          onClick={() => setActiveTab("Contact")}
          className={`uppercase tracking-wide text-sm font-normal p-4 cursor-pointer ${
            activeTab === "Contact"
              ? "text-white bg-red-700"
              : "text-black hover:bg-red-700 hover:text-white"
          }`}
        >
          Contact
        </a>
      </div>

      {activeTab === "About" && (
        <div>
          <h2 className=" mt-1 text-5xl font-semibold text-black font-bebas">
            Exceptional culinary experience and delicious food
          </h2>
          <p className="mt-2 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            magna minim veniam nostrud exercitation.
          </p>
        </div>
      )}

      {activeTab === "Experience" && (
        <div>
          <h2 className="mt-1 text-5xl font-semibold text-black font-bebas">
            Our Expertise
          </h2>
          <p className="mt-2 text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic libero
            officia, atque vero dolor amet totam sit quaerat suscipit? Quidem.
          </p>
        </div>
      )}

      {activeTab === "Contact" && (
        <div>
          <h2 className="mt-1 text-5xl font-semibold text-black font-bebas">
            Get in Touch with Us
          </h2>
          <p className="mt-2 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis, illum ipsa quos quae dolore neque quibusdam odio
            repellat. Corrupti?
          </p>
        </div>
      )}
    </>
  );
};

export default AboutTab;
