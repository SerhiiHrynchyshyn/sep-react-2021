import React, {useState} from "react";

import './App.css';
import Users from "./componens/Users/Users";
import UserDetails from "./componens/UserDetails/UserDetails";
import Posts from "./componens/Posts/Posts";

function App() {
    const [user, setUser] = useState(null);
    const [postId, setPostId] = useState(null);

    const getUse = (user) => {
        setUser(user);
        setPostId(null)
    }

    const getPostId = (id) => {
        setPostId(id)
    }

    return (
        <div>
            <div className={'wrap'}>
                <Users getUse={getUse}/>
                {user && <UserDetails user={user} getPostId={getPostId}/>}
            </div>
            {postId && <Posts postId={postId}/>}
        </div>
    );
}

export default App;