import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post:{title, id}}) => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>title: {title}</h3>
            <button onClick={()=> navigate(`/posts/${id}`)}>post-details</button>
            <br/>
        </div>
    );
};

export default Post;