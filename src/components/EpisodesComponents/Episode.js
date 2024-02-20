import React from 'react';
import {useNavigate} from "react-router-dom";
const Episode = ({episodes}) => {
    const {id, name, episode} = episodes;
    const navigate = useNavigate()
    console.log(episodes.characters)
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {episode}</div>
            <button onClick={() => navigate(`/characters`)}>Click to check all characters of the episode</button>
            <br/>
        </div>
    );
};

export default Episode;