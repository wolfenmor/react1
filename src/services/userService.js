import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const userService = {
    getAll:() => apiService.get(urls.users),
    create:(user)=>apiService.post(urls.users, user)
}

export {userService};