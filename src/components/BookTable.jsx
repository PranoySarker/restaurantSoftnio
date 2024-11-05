import React from "react";
import BookTableImg from "../assets/book_table.jfif";
import BookingForm from "./BookingForm";

const BookTable = () => {
  return (
    <div
      className="h-content md:h-[38rem] bg-cover text-white"
      style={{ backgroundImage: `url(${BookTableImg})` }}
    >
      <div className="container mx-auto">
        <div className="p-16">
          <p className="text-red-700 text-sm font-bold">Book Now</p>
          <h2 className="mt-3 text-4xl font-semibold font-bebas">
            Book Your Table
          </h2>
          <p className="w-1/2 my-5">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookTable;
