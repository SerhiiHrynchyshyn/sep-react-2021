import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <>
            <div>
                {title}
                <Link to={id.toString()} state={{...post}}><button>Post Details</button></Link>
            </div>
        </>
    );
};

export {Post};