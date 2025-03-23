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

  const modalHandler = (bus) => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Buses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {buses?.map((bus, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800">{`Route: ${bus.from} to ${bus.to}`}</h3>
            <span className="text-gray-600">Coach No. #53-P</span>
            <p className="text-gray-600 mt-2"> {bus.departure}</p>
            <p className="text-gray-600">Price: {bus.price} TK</p>
            <button
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              onClick={() => selectSeatHandler(bus)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <Seats
        isOpen={isOpen}
        modalHandler={modalHandler}
        selectedBus={selectedBus}
      />
    </div>
  );
};

export default SearchResults;
