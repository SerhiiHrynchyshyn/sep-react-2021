import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import './PostDetailsPage.css';
import {postsService} from "../../service/post.service";

const PostDetailsPage = () => {
    const [post, setPost] = useState(null);
    const {state: postDetails} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (postDetails) {
            setPost(postDetails)
            return;
        }
        postsService.getPostId(id).then(value => setPost(value))
    }, [id, postDetails])

    return (
        <div className={'PostDetailsPage'}>
            {
                post &&
                <>
                    <ul>
                        <li>{post.userId}</li>
                        <li>{post.id}</li>
                        <li>{post.title}</li>
                        <li>{post.body}</li>
                    </ul>
                    <button>All Coments Posts</button>
                </>
            }
        </div>
    );
};

export {PostDetailsPage};