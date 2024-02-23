import React from 'react';
import {useParams} from "react-router-dom";
import Episodes from "../components/Episodes/Episodes";

const EpisodesPage = () => {
    const {ids} = useParams();
    console.log(ids)
    return (
        <div>
            <Episodes ids={ids}/>
        </div>
    );
};

export default EpisodesPage;