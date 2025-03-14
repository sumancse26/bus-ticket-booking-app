"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., search for buses)
    console.log({ from, to, date, seats });
    router.push("/buses");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600">
          Bus Ticket Booking
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Find and book your bus tickets easily
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="From"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="text"
              placeholder="To"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            >
              <option value="">Select Seats</option>
              <option value="1">1 Seat</option>
              <option value="2">2 Seats</option>
              <option value="3">3 Seats</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Search Buses
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
