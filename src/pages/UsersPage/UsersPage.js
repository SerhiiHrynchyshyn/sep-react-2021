import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './UsersPage.css'
import {userService} from "../../service/user.service";
import {User} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])

    return (
        <div className={'container'}>
            <div className={'users'}>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={'userDetails'}><Outlet/></div>
        </div>
    );
};

export {UsersPage};