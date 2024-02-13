import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
const Header = () => {
    return (
        <div className={css.Header}>
            <h3><NavLink to={""}>MainPage</NavLink></h3>
            <h1><NavLink to={"comments"}>Comments</NavLink></h1>
        </div>
    );
};

export default Header;