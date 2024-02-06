import {axiosInstance} from "./Urls";
const getSpaceXs = () => {
   return axiosInstance.get("/launches")
}
export {getSpaceXs}