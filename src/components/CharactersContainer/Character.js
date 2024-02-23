import React from 'react';
import {useNavigate} from "react-router-dom";

const Character = ({character}) => {
    const {id, name, image} = character;

    const navigate = useNavigate()

    const toEpisodes = () => {
        const ids = character.map(characters => characters.split("/").slice(-1)[0]).join(",")
        navigate(`/episodes/${ids}`)
        console.log(ids)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>name:: {name}</div>
            <img src={image} alt={name}/>
            <button onClick={()=> toEpisodes()}>Click to see Episodes of the current Character</button>
        </div>
    );
};

export default Character;