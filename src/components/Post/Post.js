import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <>
            <div>
                {title}
                <Link to={id.toString()} postState={post}>
                    <button>postDetails</button>
                </Link>
            </div>

        </>
    );
};

export {Post};