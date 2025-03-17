import axios from "axios";

const URL = "https://ingame1.azeme.uz/api/user/products";
const API_URL = "https://ingame1.azeme.uz/api/user/statuses";

export const getProducts = async () => {
    try {
        const response = await axios.get(URL);
        // console.log("Fetched prodcuts:", response.data.data);
        return response.data.data
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export const getNewProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        // console.log("Fetched prodcuts:", response.data.data);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}