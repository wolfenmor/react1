import React from 'react';

import css from "./Header.module.css"
import {UseAppContext} from "../hoc/UseAppContext";
const Header = () => {
    const [name, ] = UseAppContext()
    return (
        <div className={css.Header}>
            <p><b>Rick and Morty</b></p>
            {
                name && <p>{name}</p>
            }
        </div>
    );
};

export default Header;