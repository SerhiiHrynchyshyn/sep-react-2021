import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_,{rejectedWithValue}) =>{}
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers:{

    }
});

const userReducer = userSlice.reducer;

export default userReducer;