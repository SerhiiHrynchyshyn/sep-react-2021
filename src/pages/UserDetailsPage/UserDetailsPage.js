import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../service/user.service";
import './UserDetailsPage.css'

const UserDetailsPage = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const {userstate} = useLocation();

    useEffect(() => {
        if (userstate) {
            setUser(userstate);
            return
        }
        userService.getUserId(id).then(value => setUser(value));
    }, [id])

    return (
        <>
            {user &&
            <>
                <ul>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <ul>
                        <li>{user.address.street}</li>
                        <li>{user.address.suite}</li>
                        <li>{user.address.city}</li>
                        <li>{user.address.zipcode}</li>
                        <ul>
                            <li>{user.address.geo.lat}</li>
                            <li>{user.address.geo.lng}</li>
                        </ul>
                    </ul>
                    <li>{user.phone}</li>
                    <li>{user.website}</li>
                    <ul>
                        <li>{user.company.name}</li>
                        <li>{user.company.catchPhrase}</li>
                        <li>{user.company.bs}</li>
                    </ul>
                </ul>
                <button>All Post Users</button>
            </>
            }
        </>
    );
};

export {UserDetailsPage};