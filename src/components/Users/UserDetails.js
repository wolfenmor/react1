import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {

    const {name, username, email, address} = userDetails;

    const navigate = useNavigate()
    return (
        <div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>city: {address.city}</div>
            <div>street: {address.street}</div>
            <button onClick={()=> navigate("posts")}>post of current user</button>
        </div>
    );
};

export default UserDetails;