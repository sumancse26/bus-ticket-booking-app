import Bus from "@/app/components/SearchResult.jsx";
const busList = [
  { from: "Dhaka", to: "Rangpur", departure: "15-03-2025", price: 1000 },
  { from: "Dhaka", to: "Lalmonithar", departure: "15-03-2025", price: 1200 },
];
const Buses = () => {
  return (
    <div>
      <Bus buses={busList} />
    </div>
  );
};

export default Buses;
