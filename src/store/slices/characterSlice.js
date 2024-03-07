import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../service/characterService";

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
}
const getAllById = createAsyncThunk(
    "characterSlice/getAllById",
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids);
            return data
        }catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const characterSlice = createSlice({
name: "characterSlice",
    initialState,
    extraReducers: builder => {
    builder.addCase(getAllById.fulfilled, (state, action) => {
        state.characters = action.payload
    })
    }
})
const {reducer: charactersReducer, actions} = characterSlice;

const characterAction = {
    ...actions,
    getAllById,
}

export {characterAction, charactersReducer}