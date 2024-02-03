import React from 'react';
const SpaceX = ({value}) => {
        return (
            <div>
                {value.mission_name} {value.launch_year} <img src={value.links.mission_patch_small} alt={value.mission_name}/>{

            }
            </div>
        );
};
export default SpaceX;