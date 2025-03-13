// src/components/BookingForm.js

import { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seat, setSeat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking submission logic here
    console.log({ name, email, seat });
  };

  return (
    <div className="container mx-auto py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Passenger Details</h2>
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Select Seat</label>
          <select
            className="w-full px-4 py-2 border rounded-lg"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
          >
            <option value="">Choose a seat</option>
            <option value="1A">1A</option>
            <option value="1B">1B</option>
            <option value="2A">2A</option>
            <option value="2B">2B</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
