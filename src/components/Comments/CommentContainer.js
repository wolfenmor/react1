import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const CommentContainer = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        commentsService.getAll().then(({data})=> setComments(data))
    }, [])

    return (
        <div>
            <CommentForm setComment={setComments} key={comments.id}/>
            <hr/>
            <Comments comments={comments} />
        </div>
    );
};

export default CommentContainer;