"use client";

import { useState } from "react";

const acBusSeats = [
  ["A1", "", "A2", "A3"],
  ["B1", "", "B2", "B3"],
  ["C1", "", "C2", "C3"],
  ["D1", "", "D2", "D3"],
  ["E1", "", "E2", "E3"],
  ["F1", "", "F2", "F3"],
  ["G1", "", "G2", "G3"],
  ["H1", "", "H2", "H3"],
  ["I1", "I2", "I3", "I4"],
];

const nonAcBusSeats = [
  ["A1", "A2", "", "A3", "A4"],
  ["B1", "B2", "", "B3", "B4"],
  ["C1", "C2", "", "C3", "C4"],
  ["D1", "D2", "", "D3", "D4"],
  ["E1", "E2", "", "E3", "E4"],
  ["F1", "F2", "", "F3", "F4"],
  ["G1", "G2", "", "G3", "G4"],
  ["H1", "H2", "", "H3", "H4"],
  ["I1", "I2", "", "I3", "I4"],
  ["J1", "J2", "", "J3", "J4"],
  ["K1", "K2", "K3", "K4", "K5"],
];

const soldSeats = ["A1", "A3", "B1", "B3", "G1", "G3"];

const BusSeatSelection = ({ isOpen, modalHandler, selectedBus }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatsData = selectedBus.type == "AC" ? acBusSeats : nonAcBusSeats;

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
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 opacity-[0.6] transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => modalHandler(false)}
      ></div>

      {/* Sliding Seat Selection Component */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-5 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Select Seats</h2>
          <button className="text-xl" onClick={() => modalHandler(false)}>
            ✕
          </button>
        </div>

        {/* Bus Info */}
        <div className="bg-gray-100 p-3 mt-3 rounded">
          <div className="font-semibold">Hanif Enterprise</div>
          <div className="text-sm text-gray-600">
            2, VOLVO, AC | Coach No. #53-P
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <b>Dhaka</b> <br /> 10:00 PM
            </div>
            <div>
              <b>Rangpur</b> <br /> 06:00 AM
            </div>
          </div>
        </div>

        {/* Seat Selection Info */}
        <p className="text-sm text-yellow-600 mt-3">
          Maximum 4 seats can be selected.
        </p>

        {/* Seat Legend */}
        <div className="flex justify-around text-xs my-2">
          <span className="flex items-center gap-1">
            <div className="w-4 h-4 border border-gray-400"></div> Available
          </span>
          <span className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-500"></div> Sold
          </span>
          <span className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-500"></div> Selected
          </span>
        </div>

        {/* Seat Layout */}
        <div className="flex flex-col items-center gap-1 mt-3 !h-[calc(100vh-340px)] overflow-auto">
          {seatsData.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {row.map((seat, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 border rounded-md flex items-center justify-center text-sm ${
                    seat === ""
                      ? "invisible"
                      : soldSeats.includes(seat)
                      ? "bg-gray-500 text-white"
                      : selectedSeats.includes(seat)
                      ? "bg-green-500 text-white"
                      : "border-gray-400"
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
        <div className="flex justify-between items-center mt-4 p-3 bg-gray-100 rounded">
          <div>{selectedSeats.length} ticket(s) selected</div>
          <button
            className="bg-green-600 text-white px-4 py-1 rounded-md flex items-center gap-1 disabled:bg-gray-400"
            disabled={selectedSeats.length === 0}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default BusSeatSelection;
