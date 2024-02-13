import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Post from "./Post";
import {commentService} from "../../services/commentService";
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const {state} = useLocation();
    console.log(state)
    useEffect(() => {
        commentService.getPostsById(state.postId).then(({data}) => setPosts(data))
        }, [state.postId]);
    return (
        <div>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;