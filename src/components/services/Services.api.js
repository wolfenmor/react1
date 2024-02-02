import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
});

const getAll = () => {
    return axiosInstance.get("/posts")
}

export {getAll}