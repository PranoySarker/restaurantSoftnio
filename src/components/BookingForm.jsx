import React, { useState } from "react";

const BookingForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(data);
    setData({
      name: "",
      email: "",
      date: "",
      people: "",
      message: "",
    });
  };

  return (
    <div class="relative">
      <div class="md:w-1/2">
        <form onSubmit={submitHandler}>
          <div class="grid grid-cols-6 gap-6">
            <div class=" col-span-6 sm:col-span-3">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={changeHandler}
                id="name"
                class="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={changeHandler}
                id="email"
                class="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={changeHandler}
                id="date"
                class=" shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Reservation Date"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <input
                type="number"
                name="people"
                value={data.people}
                onChange={changeHandler}
                id="people"
                class="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Total People"
                required=""
              />
            </div>
            <div class="col-span-full">
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={changeHandler}
                rows="6"
                class="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <input
            class="text-black bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center mt-5"
            type="submit"
            name="Book Now"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
