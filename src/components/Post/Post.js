import React from 'react';

const Post = (props) => {
    let {userId, id, title, body} = props;
    return (
        <div>
            {userId} {id} {title} {body}
        </div>
    );
};

export default Post;