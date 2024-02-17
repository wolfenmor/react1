import React from 'react';

import Comments from "../Comments/Comments";

const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export default PostDetails;