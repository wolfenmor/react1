import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const characterService = {
    getByIds: (ids) => apiService.get(urls.characters.byIds(ids)),
}

export {characterService}