import React from 'react';
import PostDetails from "../components/Posts/PostDetails";
import PostsContainer from "../components/Posts/PostsContainer";
import {Outlet} from "react-router-dom";

const PostDetailsPage = () => {
    return (
        <div>
            <PostsContainer/>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;