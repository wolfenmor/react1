import React from 'react';
const Post = ({post, getCurrentPost}) => {
    return (

        <div id={"post"}>
            <h2>id: {post.id}<br/> title: {post.title}</h2>
            <button onClick={() => getCurrentPost(post)}>Click to show info</button>
            <hr/>
        </div>
    );
};
export default Post;