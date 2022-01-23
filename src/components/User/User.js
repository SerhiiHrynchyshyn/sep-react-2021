import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <>
            <div>
                {id} {name} {username}
                <Link to={id.toString()} userstate={user}>
                    <button>userDetails</button>
                </Link>
            </div>
        </>
    );
};

export {User};