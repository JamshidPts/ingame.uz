import axios from "axios";

const URL = "https://ingame1.azeme.uz/api/user/desktops";

export const getOurPC = async () => {
    try {
        const response = await axios.get(URL);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching desktops:", error);
        return [];
    }
};
