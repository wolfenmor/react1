import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const episodesService = {
    getById: (ids) => apiService.get(urls.episodes.byId(ids))
}

export {episodesService}