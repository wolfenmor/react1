import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {characterAction} from "../../store/slices/characterSlice";
import Character from "./Character";
import {episodeActions} from "../../store/slices/episodeSlice";

const Characters = () => {
    const {ids} = useParams()
    console.log(ids)

    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.characters)
    useEffect(()=> {
        dispatch(characterAction.getAllById({ids}))
    }, [dispatch, ids])
    console.log(characters)

    const navigate = useNavigate()
    const click = () => {
      navigate(-1)
        dispatch(episodeActions.setName(null))
    }
    return (
        <div>
            <button onClick={() => click()}>back</button>
            {characters && characters.map(character => <Character key={character.id} character={character}/>)}

        </div>
    );
};

export default Characters;