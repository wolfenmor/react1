import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../store/slices/userSlice";
import User from "./User";

const Users = () => {

    const {users} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(()=> {
    dispatch(userActions.getAll())
    }, [dispatch])
    console.log(users)
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;