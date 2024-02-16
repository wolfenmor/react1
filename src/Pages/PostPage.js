import React from 'react';
import {Outlet} from "react-router-dom";

import PostsContainer from "../components/Posts/PostsContainer";

const PostPage = () => {
    return (
        <div>
            <PostsContainer/>
            <Outlet/>
        </div>
    );
};

export default PostPage;