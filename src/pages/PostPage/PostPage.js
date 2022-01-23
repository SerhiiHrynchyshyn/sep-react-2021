import React, {useEffect, useState} from 'react';

import {postService} from "../../service/post.service";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value));
    }, [])

    return (
        <div className={'container'}>
            <div className={'posts'}>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <div className={'postDetails'}><Outlet/></div>
            </div>
        </div>
    );
};

export {PostPage};