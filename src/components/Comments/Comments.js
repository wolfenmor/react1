import React from 'react';

import Comment from "./Comment";

const Comments = ({comments}) => {
    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;