import React from 'react';

const User = ({user: {id, name, username, email}}) => {

    return (
        <div>
            {
                <div>{id}) {name} {username} {email}</div>
            }

        </div>
    );
};

export default User;