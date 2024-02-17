import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getById: (postId) => apiService.get(urls.comments.byId(postId))
}

export {commentsService}