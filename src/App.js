import React from 'react';
import {Route, Routes} from "react-router-dom";

import {
    AlbumsPage,
    Layout,
    NotFoundPage,
    PhotosPage,
    PostDetailsPage,
    PostOfCommentsPage,
    PostsPage,
    UserDetailsPage,
    UsersOfPostsPage,
    UsersPage
} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UsersOfPostsPage/>}/>
                    </Route>

                    <Route path={':id/albums'} element={<AlbumsPage/>}>
                        <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                    </Route>

                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<PostOfCommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;