import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../service/user.service";

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getUserId(id).then(value => setUser(value))
    },[])

    return (
        <div>
            {user &&
            <div>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <div>{user.address.street}</div>
                <div>{user.address.suite}</div>
                <div>{user.address.city}</div>
                <div>{user.address.zipcode}</div>
                <div>{user.address.geo.lat}</div>
                <div>{user.address.geo.lng}</div>
                <div>{user.phone}</div>
                <div>{user.website}</div>
                <div>{user.company.name}</div>
                <div>{user.company.catchPhrase}</div>
                <div>{user.company.bs}</div>
            </div>}
        </div>
    );
};

export default UserDetailsPage;