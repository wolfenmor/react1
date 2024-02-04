import React from 'react';
import SpaceX from "./SpaceX";

const SpaceXs = ({item}) => {
    return (
        <div>
            {item.map((item) => <SpaceX value={item} key={item.flight_number}></SpaceX>)
            }
        </div>
    );
};

export default SpaceXs;