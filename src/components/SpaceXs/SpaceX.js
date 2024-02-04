import React from 'react';
const SpaceX = ({value}) => {
        return (
            <div>
                <h2>{value.mission_name}</h2>
                <p><b>{value.launch_year}</b></p>
                <img src={value.links.mission_patch_small} alt={value.mission_name}/>
                <hr/>
            </div>
        );
};
export default SpaceX;