import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout, UsersPage} from "./Pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;