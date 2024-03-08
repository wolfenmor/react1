import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../store/slices/postSlice";
import {userActions} from "../../store/slices/userSlice";
import Post from "./Post";
const Posts = () => {
    const {id} = useParams()

    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts)
    useEffect(()=> {
        dispatch(postActions.getById({id}))
    }, [id,dispatch])
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
        dispatch(userActions.setName(null))
    }
    return (
        <div>
            <button onClick={() => back()}>back</button>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;