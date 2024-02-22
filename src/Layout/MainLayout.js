import React, {createContext} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import {handleClick} from "../components/EpisodesComponents/Episodes";

export const Context = createContext(null)
const MainLayout = () => {

    return (
        <div>
            <Context.Provider value={"a"}>
                <Header/>
                <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default MainLayout;