import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/postService";
import Post from "./Post";

const Posts = ({chosePost}) => {
    const {id} = useParams();

    const [posts, setPosts] = useState(null)

    useEffect(()=> {
        postService.getById(id).then(({data}) => setPosts(data))
    }, [id])
    return (
        <div>
            {posts && posts.map(post => <Post key={post.id} post={post} chosePost={chosePost}/>)}
        </div>
    );
};

export default Posts;