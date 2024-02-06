import axios from "axios";
import {baseURL} from "../../constant/urls";

const axiosInstance = axios.create({
    baseURL,
    headers: {}
});

const getAll = () => {
    return axiosInstance.get("/posts")
}

export {getAll}