import React, { useState, useEffect, useRef } from "react";
import BurgerImg from "../assets/burger.png";
import PizzaImg from "../assets/pizza.png";
import FrenchImg from "../assets/french.png";
import FryImg from "../assets/fry.png";

const FoodCards = () => {
  const foodItems = [
    {
      img: BurgerImg,
      title: "VEGETABLES BURGER",
      desc: "Barbecue Italian cuisine pizza",
    },
    {
      img: PizzaImg,
      title: "SPECIAL PIZZA",
      desc: "Barbecue Italian cuisine pizza",
    },
    {
      img: FrenchImg,
      title: "SPECIAL FRENCH FRIES",
      desc: "Barbecue Italian cuisine pizza",
    },
    {
      img: FryImg,
      title: "CUISINE CHICKEN",
      desc: "Barbecue Italian cuisine pizza",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Clone items for seamless looping
  const clonedItems = [...foodItems, ...foodItems, ...foodItems];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Adjust this interval for desired speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= foodItems.length) {
      // Reset position to create infinite effect
      setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Delay to create a seamless effect
    }
  }, [currentIndex, foodItems.length]);

  return (
    <div className="overflow-hidden relative w-full max-w-7xl mx-auto">
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % foodItems.length) * 100}%)`,
        }}
      >
        {clonedItems.map((item, index) => (
          <div
            key={index}
            className="w-1/4 md:w-1/4 sm:w-full flex-shrink-0 p-2"
          >
            <div className="max-w-xs mx-auto text-center border p-5 shadow-lg rounded-lg bg-white">
              <div className="mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 rounded-md"
                />
              </div>
              <div className="w-10 h-1 mx-auto bg-red-700 mb-4"></div>
              <h3 className="text-lg font-semibold text-black mb-2 font-bebas uppercase">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
