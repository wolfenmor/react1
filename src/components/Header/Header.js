import React from 'react';
import css from "./Header.module.css"
import {useSelector} from "react-redux";
const Header = () => {
    const {name} = useSelector(state => state.episodes)
    console.log(name)
    return (
        <div className={css.Header}>

            <p>Rick and Morty</p>{name !== null && <p> - {name}</p>}

        </div>
    );
};

export default Header;