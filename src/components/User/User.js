import React from 'react';

import './User.css'
import {useDispatch} from "react-redux";
import {deleteUser} from "../../store";

const User = ({user}) => {

    const {id, name, username, email} = user;

    const dispatch = useDispatch();

    return (
        <div className={'user'}>
            <div>
                <div>{id}</div>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
            </div>
            <button onClick={() => dispatch(deleteUser({id}))}>Delete</button>
        </div>
    );
};

export {User};