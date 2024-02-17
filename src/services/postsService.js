import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getById:(userId) => apiService.get(urls.posts.byId(userId)),
    getPostById:(id) => apiService.get(urls.posts.postById(id))
}

export {postsService}