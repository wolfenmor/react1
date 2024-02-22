import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "./Episode.module.css"
const Episode = ({episodes, handleClick}) => {
    const {id, name, episode} = episodes;
    const navigate = useNavigate()

    const click = () => {
        const ids = episodes.characters.map(characters => characters.split("/").slice(-1)[0]).join(",")
        navigate(`/characters/${ids}`)
        handleClick(name)
    }
    return (
        <div className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {episode}</div>
            <button onClick={() =>click()}>Click to check all characters of the episode</button>
            <br/>
        </div>
    );
};

export default Episode;