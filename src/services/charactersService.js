import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const charactersService = {
    getAll: (page) => apiService.get(urls.characters.base, {params: {page}})
}

export {charactersService}