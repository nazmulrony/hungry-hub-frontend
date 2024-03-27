import axios from "axios";
import { store } from "./redux/store";

const { token } = store.getState()?.auth;

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${token ?? ""}`,
    },
});

export default Axios;
