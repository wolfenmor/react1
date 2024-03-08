    import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
    import {leagueService} from "../../services/leagueService";

    const initialState = {
        leagues: []
    }
    const getAll = createAsyncThunk(
        "leagueSlice/getAll",
        async (_,thunkAPI) => {
            try {
                const {data} = await leagueService.getAll()
                return data

            }catch (e) {
                return thunkAPI.rejectWithValue(e.response.value)
            }
        }
    )
    const leagueSlice = createSlice({
        name: "leagueSlice",
        initialState,
        extraReducers: builder =>  {
            builder.addCase(getAll.fulfilled, (state, action) => {
                state.leagues = action.payload
            })
        }
    })

    const {reducer: leagueReducer, actions} = leagueSlice

    const leagueActions = {
        ...actions,
        getAll
    }

    export {leagueReducer, leagueActions}