"use client";
import { useState } from "react";
import Seats from "./Seats.jsx";

const SearchResults = ({ buses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBus, setSelectedBus] = useState({});

  const selectSeatHandler = (bus) => {
    setSelectedBus(bus);
    setIsOpen(true);
  };

  const modalHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10 relative">
        <span className="inline-block animate-bounce text-green-600 text-3xl mr-2">
          🚍
        </span>
        <span className="relative z-10">
          Available Buses
          <span className="block h-0.5 w-20 bg-green-500 rounded-full mx-auto mt-2"></span>
        </span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {buses?.map((bus, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{`${bus.from} ➝ ${bus.to}`}</h3>
              <p className="text-sm text-gray-500 mb-1">
                Coach No:
                <span className="font-semibold text-gray-700">
                  {bus.schedules?.buses?.bus_no || ""}
                  {bus.schedules?.buses?.id ? "-" : ""}
                  {bus.schedules?.buses?.bus_name || ""}
                </span>
              </p>
              <p className="text-gray-600 mb-1">
                🕒 Departure:{" "}
                <span className="font-medium">{bus.departure}</span>
              </p>
              <p className="text-gray-600">
                💰 Price: <span className="font-medium">{bus.price} TK</span>
              </p>
            </div>
            <button
              className="mt-6 w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => selectSeatHandler(bus)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Seat Booking Modal */}
      <Seats
        isOpen={isOpen}
        modalHandler={modalHandler}
        selectedBus={selectedBus}
      />
    </div>
  );
};

export default SearchResults;
