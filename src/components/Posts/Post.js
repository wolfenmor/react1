import React from 'react';
import {useNavigate} from "react-router-dom";


const Post = ({post, chosePost}) => {
    const {title, id} = post;
    const navigate = useNavigate()
    return (
        <div>
            <div>title: {title}</div>
            <button onClick={()=> {
                navigate(`${id.toString()}/comments`);
                chosePost(post);
            }}>post-details
            </button>
            <br/>
        </div>
    );
};

export default Post;
