import React from 'react';

import {Outlet} from "react-router-dom";
import {Header} from "../index";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={'main'}>
                <Outlet/>
            </main>
            <footer className={'footer'}>
                @ReactRouterDom
            </footer>
        </>
    );
};

export {Layout};