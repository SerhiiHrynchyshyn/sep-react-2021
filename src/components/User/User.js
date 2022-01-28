import React from 'react';
import {Link} from "react-router-dom";

import './User.css';

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <>
            <div>
                {id} {name} {username}
                <Link to={id.toString()} state={{...user}}><button>User Details</button></Link>
                <Link to={id.toString() + '/albums'} state={{...user}}><button>User album</button></Link>
            </div>
        </>
    );
};

export {User};