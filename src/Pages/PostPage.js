import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {postService} from "../services/postService";
import Posts from "../components/Posts/Posts";
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