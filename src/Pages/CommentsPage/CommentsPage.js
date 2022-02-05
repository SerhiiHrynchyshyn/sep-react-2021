import React, {useEffect} from 'react';

import './CommentsPage.css';
import {useDispatch, useSelector} from "react-redux";
import {Comment} from "../../components";
import {getAllComments} from "../../store";

const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state['comments']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            <div className={'commentPage'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {CommentsPage};