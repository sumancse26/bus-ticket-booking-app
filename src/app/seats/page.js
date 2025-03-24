"use client";

import { useState } from "react";

const seatsData = [
  ["A1", "", "A3", "A4"],
  ["B1", "", "B3", "B4"],
  ["C1", "", "C3", "C4"],
  ["D1", "", "D3", "D4"],
  ["E1", "", "E3", "E4"],
  ["F1", "", "F3", "F4"],
  ["G1", "", "G3", "G4"],
  ["H1", "", "H3", "H4"],
  ["I1", "", "I3", "I4"],
];

const soldSeats = ["A1", "A3", "B1", "B3", "G1", "G3"];

const BusSeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (soldSeats.includes(seat)) return;

    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        return prev.filter((s) => s !== seat);
      } else if (prev.length < 4) {
        return [...prev, seat];
      }
      return prev;
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-semibold">Select Seats</h2>
        <button className="text-gray-500 hover:text-gray-800">✕</button>
      </div>

      {/* Bus Info */}
      <div className="my-4 p-3 bg-gray-100 rounded-lg">
        <div className="font-semibold">Hanif Enterprise</div>
        <div className="text-sm text-gray-600">
          2, VOLVO, AC | Coach No. #53-P
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <div>
            <span className="font-semibold">Dhaka</span> <br />
            <span className="text-gray-500">10:00 PM</span>
          </div>
          <div>
            <span className="font-semibold">Rangpur</span> <br />
            <span className="text-gray-500">06:00 AM</span>
          </div>
        </div>
      </div>

      {/* Seat Selection Info */}
      <p className="text-center text-yellow-600 text-sm">
        Maximum 4 seats can be selected.
      </p>

      {/* Seat Legend */}
      <div className="flex justify-center gap-4 my-3 text-sm">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 border border-gray-400"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 bg-gray-400"></div>
          <span>Sold</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 bg-green-500"></div>
          <span>Selected</span>
        </div>
      </div>

      {/* Seat Layout */}
      <div className="!h-[400] grid gap-2 bg-gray-50 p-4 rounded-lg">
        {seatsData.map((row, rowIndex) => (
          <div key={rowIndex} className="!h-[400] flex justify-center gap-3">
            {row.map((seat, index) => (
              <button
                key={index}
                className={`w-10 h-[400px] flex items-center justify-center rounded-md text-sm font-medium ${
                  seat === ""
                    ? "invisible"
                    : soldSeats.includes(seat)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : selectedSeats.includes(seat)
                    ? "bg-green-500 text-white"
                    : "border border-gray-400"
                }`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 p-3 bg-gray-100 rounded-lg flex justify-between items-center">
        <div className="text-sm">
          <span className="font-semibold">
            {selectedSeats.length} ticket(s) selected
          </span>
        </div>
        <button
          className={`px-6 py-2 text-white rounded-lg flex items-center gap-2 ${
            selectedSeats.length > 0
              ? "bg-green-500"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={selectedSeats.length === 0}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default BusSeatSelection;
