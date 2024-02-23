import React, {useEffect, useState} from 'react';
import {episodesService} from "../../services/episodesService";
import {useNavigate} from "react-router-dom";
import Episode from "./Episode";

const Episodes = ({ids}) => {
    const [episode, setEpisode] = useState(null);

    useEffect(()=> {
        episodesService.getById(ids).then(({data}) => setEpisode(data))
    }, [ids])

    const navigate = useNavigate();

    const back = () => {
        navigate(-1)


    }
    console.log(episode)
    return (
        <div>
            <button onClick={()=> back()}>Back</button>
            {episode && <Episode key={episode.id} episode={episode}/>}
        </div>
    );
};

export default Episodes;