import React from 'react';

import './Post.css';
import {useDispatch} from "react-redux";
import {deletePost} from "../../store";

const Post = ({post}) => {
    const {id, userId, title, body} = post;

    const dispatch = useDispatch();

    return (
        <div className={'post'}>
            <div>
                <div>Id: {id}</div>
                <div>UserId: {userId}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
            <button onClick={() => dispatch(deletePost({id}))}>Delete</button>
        </div>
    );
};

export {Post};