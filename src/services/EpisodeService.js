import {apiService} from "./ApiService";
import {urls} from "../constants/urls";

const episodeService = {
    getAll: () => apiService.get(urls.episodes.base),
    getById: (id) => apiService.get(urls.episodes.byId(id))
}

export {episodeService}