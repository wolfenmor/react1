import {configureStore} from "@reduxjs/toolkit";

import {episodeReducer} from "./slices/episodeSlice";
import {charactersReducer} from "./slices/characterSlice";

const store = configureStore({
    reducer: {
        episodes: episodeReducer,
        characters: charactersReducer
    }
});

export {store}