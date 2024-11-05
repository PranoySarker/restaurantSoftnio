import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import TestimonialCard from "./TestimonialCard";
import CustomerImg from "../assets/customer.png";

const testimonials = [
  {
    quote:
      "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    author: "John Doe",
    img: CustomerImg,
  },
  {
    quote: "I love using this every day.",
    author: "Jane Smith",
    img: CustomerImg,
  },
  {
    quote: "Highly recommend to everyone!",
    author: "Sam Wilson",
    img: CustomerImg,
  },
];

const CustomerTestimonial = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#FBF7F2] mb-10 ">
      <div className="container mx-auto pt-10 p-10 relative overflow-hidden">
        <div className="flex justify-between mt-10">
          <div>
            <p className="text-red-700 text-sm font-bold">
              Crispy, Every Bite Taste
            </p>
            <h2 className="mt-3 text-4xl font-semibold font-bebas">
              What Some of My Customers Say
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            {/* Next button */}
            <div
              onClick={nextSlide}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40 cursor-pointer"
            >
              <IoIosArrowForward className="text-red-700 text-2xl" />
            </div>
            {/* Prev button */}
            <div
              onClick={prevSlide}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40 cursor-pointer"
            >
              <IoIosArrowBack className="text-red-700 text-2xl" />
            </div>
          </div>
        </div>

        {/* Slider Wrapper */}
        <div className="relative h-96 mt-8">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex gap-3">
          {/* Next button */}
          <div
            onClick={nextSlide}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40 cursor-pointer"
          >
            <IoIosArrowForward className="text-red-700 text-2xl" />
          </div>
          {/* Prev button */}
          <div
            onClick={prevSlide}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-gray-500/40 cursor-pointer"
          >
            <IoIosArrowBack className="text-red-700 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
