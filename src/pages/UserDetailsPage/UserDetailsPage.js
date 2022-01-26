import React, {useEffect, useState} from 'react';

import './UserDetailsPage.css';
import {useLocation, useParams} from "react-router-dom";
import {usersService} from "../../service/user.service";

const UserDetailsPage = () => {
    const [user, setUser] = useState(null);

    const {state: userDetails} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (userDetails) {
            setUser(userDetails);
            return;
        }
        usersService.getUserId(id).then(value => setUser(value))

    }, [id, userDetails])


    return (
        <div className={'UserDetailsPage'}>
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
        </div>
    );
};

export {UserDetailsPage};