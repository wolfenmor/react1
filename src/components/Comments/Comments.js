import React from 'react';
import Comment from "./Comment";

function Comments ({comments}) {
return (
        <div>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
}
export default Comments;