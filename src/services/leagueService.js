import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const leagueService = {
    getAll: () => apiService.get(urls.leagues.base),
    getById: (id) => apiService.get(urls.leagues.byId(id))
}

export {leagueService}