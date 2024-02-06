import {axiosInstance} from "./urls";
const getSpaceXs = () => {
   return axiosInstance.get("/launches")
}
export {getSpaceXs}