import React from 'react';
import css from "./Header.module.css"
import {Link, NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={"/todos"}>Todos</NavLink>
            <NavLink to={"/albums"}>Albums</NavLink>
        </div>
    );
};

export default Header;