import React from 'react';
import {useParams} from "react-router-dom";

const PostTitle = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            aaaaaaaaaaa
        </div>
    );
};

export default PostTitle;