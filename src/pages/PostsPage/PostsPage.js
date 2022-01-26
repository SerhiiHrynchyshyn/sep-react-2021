import React, {useEffect, useState} from 'react';
import './PostsPage.css';
import {Post} from "../../components";
import {Outlet} from "react-router-dom";
import {postsService} from "../../service/post.service";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => setPosts(value))
    },[])

    return (
        <>
            <div className={'container__posts'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <Outlet/>
        </>
    );
};

export {PostsPage};