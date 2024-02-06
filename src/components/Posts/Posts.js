import React, {useEffect, useState} from 'react';
import {getAll} from "../services/Services.api";
import Post from "./Post";
import PostDetails from "../PostDetails/PostDetails";
const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAll().then(value => value.data).then(value => setPosts(value))
    }, [])

    const [CurPost, setCurPost] = useState(null)
    const getCurrentPost = (post) => {
        setCurPost(post)
    }
    return (
        <div>
            {CurPost && <PostDetails postDetails={CurPost}></PostDetails>}
            <hr/>
            {posts.map(post => <Post post={post} key={post.id} getCurrentPost={getCurrentPost}></Post>)}

           <hr/>
        </div>
    );
};

export default Posts;