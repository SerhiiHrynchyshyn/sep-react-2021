import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./userSlice";
import postReducer from "./postSlice";
import commentReducer from "./commentSlice";
import carReducer from "./carSlice";

const store = configureStore({
    reducer:{
        users: userReducer,
        posts: postReducer,
        comments: commentReducer,
        cars: carReducer
    }
});

export default store;