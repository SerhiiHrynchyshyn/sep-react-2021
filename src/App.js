import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CarsPage, CommentsPage, Layout, PostsPage, UsersPage} from "./Pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;