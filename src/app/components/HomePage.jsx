"use client";
import { getLocations } from "@/services/busTickets.js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchableDropdown from "./SearchableDropdown";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [locations, setLocations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const locations = await getLocations();
      setLocations(locations.data || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      from: from?.toLowerCase(),
      to: to?.toLowerCase(),
      journey_date: date,
    }).toString();
    router.push(`/buses?${query}`);
  };

  const fromHandler = (val) => {
    setFrom(val.name);
  };

  const toHandler = (val) => {
    setTo(val.name);
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
            <SearchableDropdown
              options={{
                locations: locations,
                placeholder: "From",
                itemHandler: fromHandler,
              }}
            />
          </div>
          <div className="flex space-x-4">
            <SearchableDropdown
              options={{
                locations: locations,
                placeholder: "To",
                itemHandler: toHandler,
              }}
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 
             focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 
             hover:border-gray-400 transition duration-150 ease-in-out"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
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
