import React from 'react';

const User = ({user, getUser}) => {
    const {id,name} = user;
    return (
        <div>
            {id} {name}
            <button onClick={()=>{getUser(user)}}>userDetails</button>
        </div>
    );
};

export default User;