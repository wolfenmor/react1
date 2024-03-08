import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {name} = useSelector(state => state.users)
    console.log(name)
    return (
        <div>
            {name !== null && <p> {name}</p>}
        </div>
    );
};

export default Header;