import React, {useEffect, useState} from 'react';
import SpaceX from "./SpaceX";
import {getSpaceXs} from "../../services/Space.api.services";

const SpaceXs = () => {
    const [space, setSpace] = useState([])

    useEffect(() => {
        getSpaceXs()
            .then(value => setSpace(value.data))
    }, [])
    const filteredSpace = space.filter(value => value.launch_year !== "2020")
    return (
        <div>
            {filteredSpace.map((item) => <SpaceX value={item} key={item.flight_number}/>)}
        </div>
    );
};

export default SpaceXs;