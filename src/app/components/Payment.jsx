"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log({ cardNumber, expiry, cvv });

    router.push("/confirm");
  };

  return (
    <div className="container mx-auto py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Payment</h2>
        <div>
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="Enter card number"
            className="w-full px-4 py-2 border rounded-lg"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full px-4 py-2 border rounded-lg"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-full px-4 py-2 border rounded-lg"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
