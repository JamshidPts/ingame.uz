import axios from "axios";

const URL = "https://ingame1.azeme.uz/api/user/desktop-types";

export const getDesktopTypes = async () => {
    try {
        const response = await axios.get(URL);
        // console.log("Fetched desktopTypes:", response.data.data);
        return response.data.data
    } catch (error) {
        console.error("Error fetching desktopTypes:", error);
        return [];
    }
}