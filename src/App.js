import React from 'react';

import {Route, Routes} from "react-router-dom";
import {Layout, PostDetailsPage, PostsPage, UserDetailsPage, UsersOfPostsPage, UsersPage} from "./pages";
import {PostOfCommentsPage} from "./pages/PostOfCommentsPage/PostOfCommentsPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UsersOfPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostOfCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;