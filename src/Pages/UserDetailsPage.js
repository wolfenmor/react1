import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import UserDetails from "../components/Users/UserDetails";
import {userService} from "../services/userService";

const UserDetailsPage = () => {
    const {id} = useParams();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getById(id).then(({data}) => setUserDetails(data))
    }, [id])
    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export default UserDetailsPage;