import { fetchApi } from "@/lib/api.js";

/*
    get all locations
    method: GET
*/
export const getLocations = async () => {
  const data = await fetchApi("/api/locations", {
    method: "GET",
  });
  return data;
};
export const getSchedules = async () => {
  const response = await fetchApi("/api/private/schedule", { method: "GET" });
  return response;
};
