import React from 'react';

import './Comment.css';
import {useDispatch} from "react-redux";
import {deleteComment} from "../../store";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const dispatch = useDispatch();

    return (
        <div className={'comment'}>
            <div>
                <div>Id: {id}</div>
                <div>PostId: {postId}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
            <button onClick={() => dispatch(deleteComment({id}))}>Delete</button>
        </div>
    );
};

export {Comment};