import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
    request.headers["x-rapidapi-key"] = "0cd45565d72d3618a2420465b72c575a"
    return request
})
export {apiService}