import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const charactersService = {
    getById: (id) => apiService.get(urls.characters.byId(id))
}

export {charactersService}