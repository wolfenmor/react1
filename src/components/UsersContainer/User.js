import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {userActions} from "../../store/slices/userSlice";

const User = ({user}) => {
    const {id, name, email ,address} = user;

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const click = () => {
        navigate(`/posts/${id}`)
        dispatch(userActions.setName(name))
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>street: {address.street}</div>
            <div>city: {address.city}</div>
            <button onClick={() => click()}>Posts</button>
            <br/>
        </div>
    );
};

export default User;