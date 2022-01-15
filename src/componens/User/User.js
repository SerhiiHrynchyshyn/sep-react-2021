import React from 'react';

const User = ({user, getUse}) => {
    const {id,name} = user;
    return (
        <div>
            {id} {name}
            <button onClick={()=>{getUse(user)}}>userDetails</button>
        </div>
    );
};

export default User;