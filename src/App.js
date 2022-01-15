import React, {useState} from "react";

import './App.css';
import Users from "./componens/Users/Users";
import UserDetails from "./componens/UserDetails/UserDetails";
import Posts from "./componens/Posts/Posts";
import {postService} from "./componens/service/post.service/post.service";

function App() {
    const [user, setUser] = useState(null);
    const [postId, setPostId] = useState(null);

    const getUser = (userValue) => {
        setUser(userValue);
        setPostId(null);
    }

    const getPostId = (id) => {
        postService.getAll(id).then(value => setPostId(...value))
    }

    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                <UserDetails user={user} getPostId={getPostId}/>
            </div>
            <Posts postId={postId}/>
        </div>
    );
}

export default App;