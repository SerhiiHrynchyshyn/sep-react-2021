import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {postsService} from "../services/posts.service";


export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postsService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const postReducer = postSlice.reducer;
export default postReducer;

export const {deletePost} = postSlice.actions;