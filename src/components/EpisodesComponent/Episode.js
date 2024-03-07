import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from "./Episode.module.css"
import {episodeActions} from "../../store/slices/episodeSlice";

const Episode = ({episode}) => {
    const {id, name ,episode: chapter} = episode;

    const navigate = useNavigate()

    const ids = episode.characters.map(character => character.split("/").slice(-1)[0])

    const dispatch = useDispatch()

    const click = async () => {
        await navigate(`/characters/${ids}`)
        dispatch(episodeActions.setName(name))
    }
    return (
        <div className={css.Episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
            <button onClick={() =>click()}>Click to check all characters of the episode</button>
            <br/>
        </div>
    );
};

export default Episode;