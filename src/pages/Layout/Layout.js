import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={'main'}>
                <Outlet/>
            </main>
        </>
    );
};

export {Layout};