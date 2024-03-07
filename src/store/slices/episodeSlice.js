import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodeService} from "../../service/episodeService";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    name: null
}
const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async ({page}, thunkAPI) => {
        try {
           const {data} = await episodeService.getAll(page);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers: {
      setName: (state, action) => {
          const payload = action.payload
          state.name = payload
      }
    },
    extraReducers: builder =>  {
        builder.addCase(getAll.fulfilled, (state, action) => {
            const {info: {prev, next}, results} = action.payload;
            state.prevPage = prev
            state.nextPage = next
            state.episodes = results
        })
    }

});

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions,
    getAll,
}

export {episodeActions, episodeReducer}