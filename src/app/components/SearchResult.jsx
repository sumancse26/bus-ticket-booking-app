// src/components/SearchResults.js

const SearchResults = ({ buses }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Buses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {buses.map((bus, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800">{`Route: ${bus.from} to ${bus.to}`}</h3>
            <p className="text-gray-600 mt-2">Departure: {bus.departure}</p>
            <p className="text-gray-600">Price: ${bus.price}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
