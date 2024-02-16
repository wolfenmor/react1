import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const commentsService = {
    getById:(id) => apiService.get(urls.comments.byId(id))
}
export {commentsService}
