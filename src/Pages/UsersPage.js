import React from 'react';
import {Outlet} from "react-router-dom";

import Users from "../components/Users/Users";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;