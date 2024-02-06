import React, {useEffect, useState} from 'react';
import {getAll} from "../services/Services.api";
import Post from "./Post";
const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAll().then(value => value.data).then(value => setPosts(value))
    }, [])
    const getCurrentPost = (post) => {
        console.log(post)
    }
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id} getCurrentPost={getCurrentPost}></Post>)}

            <div></div>
        </div>
    );
};

export default Posts;