import React from "react";
import BurgerImg from "../assets/burger.png";
import PizzaImg from "../assets/pizza.png";
import FrenchImg from "../assets/french.png";
import FryImg from "../assets/fry.png";

import Slider from "react-slick";

const FoodCards = ({ settings, sliderRef }) => {
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

  return (
    <Slider ref={sliderRef} {...settings}>
      {foodItems.map((item, index) => (
        <div key={index} className="p-2">
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
    </Slider>
  );
};

export default FoodCards;
