import React, {useEffect, useState} from 'react';

import {userService} from "../services/userService";
import User from "./User";
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    const [userId, setUserId] = useState([]);
    function details(userId) {
        console.log(userId)
    }

    useEffect(() => {
        if (setUserId !== null) {
            userService.getById(userId).then(({ data }) => setUserId(data));
        }
    }, [userId]);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} details={details}/>)}
        </div>
    );
};

export default Users;