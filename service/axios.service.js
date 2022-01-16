import axios from "axios";
import baseUrl from "../src/config/urls";

export const axiosService = axios.create({
    baseURL: baseUrl
})
