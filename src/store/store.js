import {configureStore} from "@reduxjs/toolkit";
import {leagueReducer} from "./slices/leagueSlice";

const store = configureStore({
    reducer: {
        leagues: leagueReducer
    }
})

export {store}