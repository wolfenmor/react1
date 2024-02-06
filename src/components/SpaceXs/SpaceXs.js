import React, {useEffect, useState} from 'react';
import SpaceX from "./SpaceX";
import {getSpaceXs} from "../services/Services.api";

const SpaceXs = () => {
    const [space, setSpace] = useState([])

    useEffect(() => {
        getSpaceXs()
            .then(value => setSpace(value))
    }, [])
    const filteredSpace = space.filter(value => value.launch_year !== "2020")
    return (
        <div>
            {filteredSpace.map((item) => <SpaceX value={item} key={item.flight_number}></SpaceX>)
            }
        </div>
    );
};

export default SpaceXs;