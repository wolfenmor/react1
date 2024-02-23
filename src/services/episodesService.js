import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const episodesService = {
    getById: (id) => apiService.get(urls.episodes.byId(id))
}

export {episodesService}