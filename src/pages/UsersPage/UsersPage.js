import React, {useEffect, useState} from 'react';

import './UsersPage.css';
import {User} from "../../components";
import {Outlet} from "react-router-dom";
import {usersService} from "../../service/user.service";


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <>
            <div className={'container__users'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </>
    );
};

export {UsersPage};