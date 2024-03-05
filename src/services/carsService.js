import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (car) => apiService.post(urls.cars.base, car),
    updateById: (id, data)=>apiService.put(urls.cars.byId(id), data),
    deleteById:(id)=> apiService.delete(urls.cars.byId(id))
}

export {carsService}