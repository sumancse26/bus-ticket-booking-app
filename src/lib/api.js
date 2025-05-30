import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const fetchApi = async (endPoint, options) => {
  const token = Cookies.get("token");

  const url = `${BASE_URL}${endPoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      token,
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
