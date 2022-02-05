import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../services/users.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectedWithValue}) => {
        try {
            return await usersService.getAll()
        } catch (e) {
            return rejectedWithValue(e.message)
        }

    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers: {
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
});

const userReducer = userSlice.reducer;

export const {deleteUser} = userSlice.actions;

export default userReducer;