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
    <div className="relative">
      <div className="md:w-1/2">
        <form onSubmit={submitHandler}>
          <div className="grid grid-cols-6 gap-6">
            <div className=" col-span-6 sm:col-span-3">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={changeHandler}
                id="name"
                className="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={changeHandler}
                id="email"
                className="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={changeHandler}
                id="date"
                className=" shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Reservation Date"
                required=""
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <input
                type="number"
                name="people"
                value={data.people}
                onChange={changeHandler}
                id="people"
                className="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Total People"
                required=""
              />
            </div>
            <div className="col-span-full">
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={changeHandler}
                rows="6"
                className="shadow-sm bg-transparent border border-gray-300 text-white sm:text-sm rounded-sm focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <input
            className="text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center mt-5"
            type="submit"
            value="Book Now"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
