import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services/postService";

const initialState = {
    posts: []
}
const getById = createAsyncThunk(
    "postSlice/getAll",
    async ({id}, thunkAPI) => {
        try {
            const {data} = await postService.getById(id)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>  {
        builder.addCase(getById.fulfilled, (state, action) => {
            const payload = action.payload
            state.posts = payload
        })
    }
})

const {reducer: postReducer, actions} = postSlice

const postActions = {
    ...actions,
    getById
}

export {postReducer, postActions}