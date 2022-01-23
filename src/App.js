import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components";
import {
    NotFoundPage,
    PostCommentPage,
    PostDetailsPage,
    PostPage,
    UserDetailsPage,
    UserPostPage,
    UsersPage
} from "./pages";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<PostCommentPage/>}/>
                    </Route>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
};

export default App;