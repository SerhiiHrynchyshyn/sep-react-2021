import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './PostPage.css';
import {Post} from "../../components";
import {getAllPosts} from "../../store";

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state['posts']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            <div className={'postsPage'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export {PostsPage};