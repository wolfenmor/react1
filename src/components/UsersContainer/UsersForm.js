import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UsersForm = ({setUsers}) => {
    const {register, handleSubmit} = useForm();
    function save(user) {
        userService.create(user).then(({data})=> setUsers(prev=>[...prev, data]));
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={"name"} {...register("name")}/>
            <input type={"text"} placeholder={"username"} {...register("username")}/>
            <input type={"text"} placeholder={"email"} {...register("email")}/>
            <button>save</button>
        </form>
    );
};

export default UsersForm;