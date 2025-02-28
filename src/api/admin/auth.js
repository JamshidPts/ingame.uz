import axios from "axios";

const AUTH_URL = "https://ingame1.azeme.uz/api/admin/login"

export const signin = async(email, password) => {
    try {
        const response = await axios.post(AUTH_URL, { email, password },
        {
            headers: {
                "Accept": "application/json"
            }
        })
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Network error" };
    }
}