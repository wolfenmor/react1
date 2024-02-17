import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import Comment from "./Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService.getById(postId).then(({data}) => setComments(data))
    }, [postId])
    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;