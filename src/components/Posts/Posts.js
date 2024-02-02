import React, {useEffect, useState} from 'react';
import {getAll} from "../services/services.api";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()  =>{
        getAll().then(value => setPosts(value.data))
    }, [])
    return (
        <div id={"posts"}>

            {
             posts.map(value => <Post item={value} key={value.id}></Post>)
            }
        </div>
    );
};

export default Posts;