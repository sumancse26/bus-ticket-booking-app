import Bus from "@/app/components/SearchResult.jsx";
const busList = [
  {
    from: "Dhaka",
    to: "Rangpur",
    departure: "15-03-2025",
    price: 1000,
    type: "Non_AC",
  },
  {
    from: "Dhaka",
    to: "Lalmonithar",
    departure: "15-03-2025",
    price: 1200,
    type: "AC",
  },
];
const Buses = () => {
  return (
    <div>
      <Bus buses={busList} />
    </div>
  );
};

export default Buses;
