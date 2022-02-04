import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <header className={'header'}>
            <NavLink to={'/users'}>Users</NavLink>
        </header>
    );
};

export {Header};