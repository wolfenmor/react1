import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import PostDetails from "../components/Posts/PostDetails";
import {postsService} from "../services/postsService";
const PostDetailsPage = () => {
    const {id} = useParams();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getPostById(id).then(({data}) => setPosts(data))
    }, [id])

    return (
        <div>
            {posts && <PostDetails key={posts.id} post={posts}/>}
        </div>
    );
};

export default PostDetailsPage;