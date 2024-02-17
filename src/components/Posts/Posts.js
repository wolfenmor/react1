import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/postsService";
import Post from "./Post";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState(null);

    useEffect(()=> {
        postsService.getById(userId).then(({data})=> setPosts(data))
    }, [userId])

    return (
        <div>
            {posts && posts.map(post => <Post key={post.id} post={post}/>) }
        </div>
    );
};

export default Posts;