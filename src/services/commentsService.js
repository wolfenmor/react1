import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const commentsService = {
    getAll:()=> apiService.get(urls.comments),
    create:(comment)=>apiService.post(urls.comments, comment)
}

export {commentsService};