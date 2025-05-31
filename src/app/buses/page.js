"use client";

import Bus from "@/app/components/SearchResult.jsx";
import { getSchedules } from "@/services/busTickets.js";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Buses = () => {
  const [busList, setBusList] = useState([]);

  const searchParams = useSearchParams();
  const queryFrom = searchParams.get("from");
  const queryTo = searchParams.get("to");
  const queryDate = searchParams.get("journey_date");
  const hasFetched = useRef(false);
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    scheduleHandler({
      from: queryFrom,
      to: queryTo,
      journey_date: queryDate,
    });
  }, [queryFrom, queryTo, queryDate]);

  const scheduleHandler = async (params) => {
    try {
      const res = await getSchedules(params);
      setBusList(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <Bus buses={busList} />
    </div>
  );
};

export default Buses;
