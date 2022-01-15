import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../service/user.service/user.service";

const Users = ({getUse}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => setUsers(users))
    }, [])


    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUse={getUse}/>)}
        </div>
    );
};

export default Users;