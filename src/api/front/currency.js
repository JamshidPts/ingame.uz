import axios from "axios";

const API_URL = "https://ingame1.azeme.uz/api/user/currencies";

export const fetchCurrencies = async () => {
  try {
    const response = await axios.get(API_URL);

    // console.log("Ответ от API:", response.data); // Логируем полный ответ

    if (response.data && Array.isArray(response.data.data)) {
      return response.data.data; // Возвращаем массив валют
    } else {
      console.warn("Ответ API не содержит массив валют:", response.data);
      return []; // Возвращаем пустой массив, если данных нет
    }
  } catch (error) {
    console.error("Ошибка при получении валют:", error?.response?.data || error.message);
    return [];
  }
};
