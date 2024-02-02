import React from 'react';

const Post = ({item: post}) => {
    return (
        <div id={post}>
            {post.id} {post.title}
            <button>Click to show more info</button>
        </div>
    );
};

export default Post;