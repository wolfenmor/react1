import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Comments from "../components/Comments/Comments";
import {commentsService} from "../services/commentsService";

const CommentsPage = () => {
    const {id} = useParams();
    console.log(id)
    const [comments, setComments] = useState(null);

    useEffect(()=> {
        commentsService.getById(id).then(({data}) => setComments(data))
    },[id]);
    return (
        <div>
            {comments && <Comments comments={comments}/>}
        </div>
    );
};

export default CommentsPage;