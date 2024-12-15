import axios from "axios";

const BASE_URL = "https://nodejs-hw-mongodb-4vnp.onrender.com";

const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Помилка запиту:", error);
  }
};

fetchData();
