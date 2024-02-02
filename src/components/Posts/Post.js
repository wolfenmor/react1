import React from 'react';

const Post = ({item: post}) => {
    return (
        <div>
            {post.id} {post.title}
        </div>
    );
};

export default Post;