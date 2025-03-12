import axios from "axios";

const URL = "https://ingame1.azeme.uz/api/user/blogs";

export const getBlogs = async () => {
    try {
        const response = await axios.get(URL);
        // console.log("Fetched blogs:", response.data.data);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}
