import React, {useEffect, useState} from 'react';
import {getAll} from "../services/Services.api";
import Post from "./Post";

const Posts = ({btn}) => {
    const [posts, setPosts] = useState([])

    useEffect(()  =>{
        getAll().then(value => setPosts(value.data))
    }, [])
    return (
        <div id={"posts"}>
            {
             posts.map(value => <Post btn={btn} item={value} key={value.id}></Post>)
            }
        </div>
    );
};
export default Posts;