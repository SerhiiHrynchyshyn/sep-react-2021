import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserPage from "./pages/UserPage/UserPage";
import PostPage from "./pages/PostPage/PostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'users/:id'} element={<UserDetailsPage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;