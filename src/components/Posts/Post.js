import React from 'react';
const Post = ({item: post, btn}) => {
    return (
        <div id={"post"}>
            {post.id} {post.title}
            <button onClick={() =>{
                btn(post)
            }}>Click to show more info
            </button>
            <hr/>
        </div>
    );
};
export default Post;