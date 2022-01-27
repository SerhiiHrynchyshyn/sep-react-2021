import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

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
            <div>
                {
                    post &&
                    <>
                        <ul>
                            <li>{post.userId}</li>
                            <li>{post.id}</li>
                            <li>{post.title}</li>
                            <li>{post.body}</li>
                        </ul>
                        <Link to={`comments`}><button>All Comments Posts</button></Link>
                    </>
                }
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostDetailsPage};