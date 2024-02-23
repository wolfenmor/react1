import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "./Character.module.css"

const Character = ({character}) => {
    const {id, name, image} = character;

    const navigate = useNavigate()

    const toEpisodes = () => {
        const ids = character.episode.map(characters => characters.split("/").slice(-1)[0]).join(",")
        navigate(`/episodes/${ids}`)
    }

    return (
        <div className={css.Character}>
            <div>id: {id}</div>
            <div>name:: {name}</div>
            <img src={image} alt={name}/>
            <br/>
            <button onClick={()=> toEpisodes()}>Click to see Episodes of the current Character</button>
        </div>
    );
};

export default Character;