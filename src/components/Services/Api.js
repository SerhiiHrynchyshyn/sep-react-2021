import React, {useEffect, useState} from "react";
import User from "../User/User";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";

export const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);

    return (
        <>
            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email}/>)}
        </>
    );
};

export const Posts = () => {
    let [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(respon => respon.json())
            .then(posts => setPost(posts))
    }, [])
    return (
        <>
            {post.map(value => <Post key={value.id} userId={value.userId} id={value.id} title={value.title} body={value.body}/>)}
        </>
    );
};

export const Comments = () => {
    let [comment, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(respons => respons.json())
            .then(coments => setComments(coments))
    })
    return (
        <>
            {comment.map(value => <Comment key={value.id} postId={value.postId} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </>
    );
};

