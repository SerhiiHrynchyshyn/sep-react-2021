import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {usersService} from "../../service/user.service";

const UsersOfPostsPage = () => {
    const [posts, setPosts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        usersService.getUserOfPosts(id).then(value => setPosts(value))
    }, [id])

    return (
        <div>
            {posts.map(post =>
                <div key={post.id}>
                    <p>{post.userId}</p>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export {UsersOfPostsPage};