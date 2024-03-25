import axios from "axios";
const token = "Bearer Token";

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default Axios;
