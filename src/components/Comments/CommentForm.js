import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../services/commentsService";
const CommentForm = ({setComment}) => {
    const {register, handleSubmit} = useForm();
    function save(comment) {
        commentsService.create(comment).then(({data})=> setComment(prev=> [...prev, data]));
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={"name"} {...register("name")}/>
            <input type={"text"} placeholder={"username"} {...register("username")}/>
            <input type={"text"} placeholder={"body"} {...register("body")}/>
            <button>Save</button>
        </form>
    );
};

export default CommentForm;