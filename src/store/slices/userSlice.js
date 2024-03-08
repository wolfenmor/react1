import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services/userService";

const initialState = {
    users: [],
    name: null
}

const getAll = createAsyncThunk(
    "usersSlice/getAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await userService.getAll()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{
        setName: (state, action) => {
            const payload = action.payload
            state.name = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            const payload = action.payload
            state.users = payload
        })
    }
})

const {reducer: userReducer, actions} = userSlice

const userActions = {
    ...actions,
    getAll
}

export {userReducer, userActions}