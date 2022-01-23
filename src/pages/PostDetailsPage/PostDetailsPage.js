import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../service/post.service";

const PostDetailsPage = () => {
    const [post, setPost] = useState(null);

    const {id} = useParams();
    const {postState} = useLocation();

    useEffect(() => {
        if (postState){
            setPost(postState);
            return
        }
        postService.getPostId(id).then(value => setPost(value))
    },[id])

    return (
        <div>
            {post &&
            <>
                <ul>
                    <li>{post.userId}</li>
                    <li>{post.id}</li>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
                <button>All Comments posts</button>
            </>}
        </div>
    );
};

export {PostDetailsPage};