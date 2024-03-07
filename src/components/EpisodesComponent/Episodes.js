import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodeActions} from "../../store/slices/episodeSlice";
import Episode from "./Episode";
import css from "./Episodes.module.css"
const Episodes = () => {
    const dispatch = useDispatch()
    const {episodes} = useSelector(state => state.episodes)

    const [query, ] = useSearchParams({page: "1"})
    const page = query.get("page")

    useEffect(()=> {
        dispatch(episodeActions.getAll({page}))
    }, [dispatch ,page])
    return (
        <div className={css.Episodes}>
            {episodes && episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export default Episodes;