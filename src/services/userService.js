import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll:() => apiService.get(urls.users.base),
    getById:(id)=> apiService.get(urls.users.byId(id)),
    create:(user)=> apiService.post(urls.users.base)
}

export {userService}