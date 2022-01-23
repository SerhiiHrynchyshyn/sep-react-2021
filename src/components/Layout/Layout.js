import React from 'react';

import './Layout.css';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header className={'header'}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </header>
            <main className={'main'}>
                <div className={'users__posts'}>
                    <Outlet/>
                </div>
                <div className={'container'}>
                    <div>UserDetail and Posts Details</div>
                    <div>Posts Users and Coments posts</div>
                </div>
            </main>
            <footer className={'footer'}>
                ReactRouterDom
            </footer>
        </div>
    );
};

export default Layout;