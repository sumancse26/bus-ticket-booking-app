"use client";

const Confirm = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-green-600">
            Booking Confirmed!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your booking has been successfully confirmed. Your ticket details
            are below.
          </p>
          <div className="mt-6">
            <p className="font-semibold">Route: City A to City B</p>
            <p className="font-semibold">Departure: 10:00 AM</p>
            <p className="font-semibold">Seat: 3A</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
