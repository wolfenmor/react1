import React from 'react';

import Episodes from "../components/EpisodesComponent/Episodes";
import EpisodesPagination from "../components/EpisodesComponent/EpisodesPagination";

const EpisodesPage = () => {
    return (
        <div>
            <Episodes/>
            <EpisodesPagination/>
        </div>
    );
};

export default EpisodesPage;