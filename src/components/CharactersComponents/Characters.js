import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {charactersService} from "../../services/charactersService";
import Character from "./Character";
import {UseAppContext} from "../../hoc/UseAppContext";

const Characters = ({ids}) => {
    const [characters, setCharacters] = useState([]);
    const [, setName] = UseAppContext()

    useEffect(()=> {
        charactersService.getById(ids).then(({data}) => setCharacters(data))
    }, [ids])

    const navigate = useNavigate();

    const back = () => {
      navigate(-1)
        setName(null)

    }
    return (
        <div>
            <button onClick={()=> back()}>Back</button>
            {characters && characters.map(character => <Character key={character.id} character={character} />)}
        </div>
    );
};

export default Characters;