import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Помилка запиту:", error);
  }
};

export const fetchResults = async (filters) => {
  try {
    const response = await axios.post("`${BASE_URL}/flowers/filter`", filters);
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered results:", error);
    throw error;
  }
};
