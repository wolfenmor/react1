import React, {useState} from 'react';
import Posts from "./Posts";

const PostsContainer = () => {
    const [postDetails ,setPostDetails] = useState(null);
    const chosePost = (obj) => {
        setPostDetails(obj)
    }
    return (
        <div>
            <Posts chosePost={chosePost}/>
            {
                postDetails && <p>id: {postDetails.id}</p>
            }
            {
                postDetails && <p>userId: {postDetails.userId}</p>
            }
            {
                postDetails && <h2>title: {postDetails.title}</h2>
            }
            {
                postDetails && <h2>body: {postDetails.body}</h2>
            }
        </div>
    );
};

export default PostsContainer;