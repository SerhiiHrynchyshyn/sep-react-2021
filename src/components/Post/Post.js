import React from 'react';

const Post = ({post}) => {
    const {title} = post;
    return (
        <>
            <div>
                {title}
                <button>postDetails</button>
            </div>
        </>
    );
};

export default Post;