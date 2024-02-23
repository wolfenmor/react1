import React, {useEffect, useState} from 'react';
import {charactersService} from "../../services/charactersService";
import Character from "./Character";
import {UsePageQuery} from "../../hooks/usePageQuery";
import css from "./Characters.module.css"

const Characters = () => {
    const [characters, setCharacters] = useState({prev: null, next: null, results: []});

    const {page, prevPage, nextPage} = UsePageQuery()
    useEffect(()=> {
        charactersService.getAll(page).then(({data}) => setCharacters(() =>{
            const {info: {next, prev}, results} = data;
            return {
                next,
                prev,
                results
            }
        }))
    }, [page])

    return (
        <div>
            <div className={css.buttons}>
                <button disabled={!characters.prev} onClick={prevPage}>prev</button>
                <button disabled={!characters.next} onClick={nextPage}>next</button>
            </div>
        <div className={css.Characters}>
            {characters.results && characters.results.map(character => <Character key={character.id} character={character}/>)}
        </div>
        </div>
    );
};

export default Characters;