import axios from "axios";

const URL = "https://ingame1.azeme.uz/api/user/contacts";

export const zayavka = async (fullname, phone) => {
    try {
        const formData = new FormData();
        formData.append("fullname", fullname);
        formData.append("phone", phone.replace(/\D/g, ""))

        const response = await axios.post(URL, formData, {
            headers: {
                "Accept": "application/json",
                "Accept-Language": "uz",
            },
        });

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Ошибка при отправке данных";
    }
}