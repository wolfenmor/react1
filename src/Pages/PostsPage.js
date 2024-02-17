import React from 'react';
import {useParams} from "react-router-dom";

import Posts from "../components/Posts/Posts";

const PostsPage = () => {
    const {id} = useParams()

    return (
        <div>
            <Posts userId={id}/>
        </div>
    );
};

export default PostsPage;