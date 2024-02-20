import React, {useEffect, useState} from 'react';
import {charactersService} from "../../services/charactersService";
import Character from "./Character";

const Characters = ({ids}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        charactersService.getById(ids).then(({data}) => setCharacters(data))
    }, [ids])
    return (
        <div>
            {characters && characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export default Characters;