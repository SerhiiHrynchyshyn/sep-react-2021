import React from 'react';

const UserDetails = ({user, getPostId}) => {
    return (
        <>
            { user &&
            <div className={'userDetails'}>
                <div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
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
                </div>
                <button onClick={() => {getPostId(user.id)}}>Get Post</button>
            </div>
            }
        </>
    );
};

export default UserDetails;
