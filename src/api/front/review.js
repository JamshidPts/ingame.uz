import axios from "axios";

const URL = "https://ingame1.azeme.uz/api/user/reviews";

export const getReview = async () => {
    try {
        const response = await axios.get(URL);
        // console.log("Fetched reviews:", response.data.data);
        return response.data.data
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
}
