import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.spacexdata.com/v3",
    headers: {}
})

export {axiosInstance}