import {createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services/carsService";

const initialState = {
    cars: [],
    trigger: null
}
const carsSlice = createSlice({
    name: "carsSlice",
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const payload = action.payload;
            state.cars = payload
        },
        create: (state, action) => {
            const payload = action.payload
            state.cars = carsService.create(payload)
            state.cars.push(action.payload);
        },
        trigger: state => {
            state.trigger = !state.trigger
        }

    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions =  {
    ...actions
}

export {
    carsReducer,
    carsActions
}