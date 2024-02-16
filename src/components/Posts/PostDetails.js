import React from 'react';

const PostDetails = ({post}) => {

    const {userId, id, title, body} = post;
    console.log(post)
    return (
        <div>
            <div>{userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostDetails;