import React from 'react';

const PostDetails = ({postDetails}) => {
    const {title, id, body, userId} = postDetails
    return (
        <div>
            <p>id: {id}</p>
            <p><b>userId: {userId}</b></p>
            <h2>title: {title}</h2>
            <p>body: {body}</p>
        </div>
    );
};

export default PostDetails;