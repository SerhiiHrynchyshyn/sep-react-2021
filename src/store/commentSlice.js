import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {commentsService} from "../services/comments.service";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentsService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    reducers: {
        deleteComment: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
        }
    },
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const commentReducer = commentSlice.reducer;
export default commentReducer;

export const {deleteComment} = commentSlice.actions;