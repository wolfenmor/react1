import React, {useEffect, useState} from 'react';
import {episodeService} from "../../services/episodeService";
import Episode from "./Episode";
import css from "./Episodes.module.css"
const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(()=> {
        episodeService.getAll().then(({data}) => setEpisodes(data.results))
    }, [])
    console.log(episodes)

    const handleClick = (episodeName) => {
        console.log(episodeName)
    };
    return (
        <div className={css.Episodes}>
            {episodes.map(episodes => <Episode key={episodes.id} episodes={episodes} handleClick={handleClick}/>)}
        </div>
    );
};

export default Episodes;