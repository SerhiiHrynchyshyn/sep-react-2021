import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './UserPage.css';
import {getAllUsers} from "../../store";
import {User} from "../../components";

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state['users']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            <div className={'userPage'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export {UsersPage};