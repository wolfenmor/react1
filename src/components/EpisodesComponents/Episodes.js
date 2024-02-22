import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episodeService";
import Episode from "./Episode";
import css from "./Episodes.module.css"
import {usePageQuery} from "../../hooks/usePageQuery";
const Episodes = () => {
    const [episodes, setEpisodes] = useState({prev:null, next:null, results:[]});

    const {page, prevPage, nextPage} = usePageQuery()
    useEffect(()=> {
        episodeService.getAll(page).then(({data}) => setEpisodes(()=> {
            const {info:{next, prev}, results} = data;
            return {
                next,
                prev,
                results
            }
        }))
    }, [page])
    
    return (
        <div>
        <div className={css.Episodes}>
            {episodes.results.map(episodes => <Episode key={episodes.id} episodes={episodes}/>)}
        </div>
            <div className={css.buttons}>
            <button disabled={!episodes.prev} onClick={prevPage}>prev</button>
            <button disabled={!episodes.next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export default Episodes;