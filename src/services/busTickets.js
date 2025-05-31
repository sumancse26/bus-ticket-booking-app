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

export const getSchedules = async (params) => {
  const queryString = new URLSearchParams(params).toString();
  const data = await fetchApi(`/api/schedule?${queryString}`, {
    method: "GET",
  });
  return data;
};
