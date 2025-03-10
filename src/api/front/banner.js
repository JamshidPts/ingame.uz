import axios from "axios";

const URL = "https://ingame1.azeme.uz/api/user/banners";

export const banners = async () => {
    try {
        const response = await axios.get(URL);
        console.log("Fetched banners:", response.data);
        return response.data.data
    } catch (error) {
        console.error("Error fetching banners:", error);
        return [];
    }
}