import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/carsService";
import CarsForm from "./CarsForm";
import Cars from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    useEffect(()=> {
        carsService.getAll().then(({data})=> setCars(data))
    }, [])
    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars cars={cars} key={cars.id}/>
        </div>
    );
};

export default CarsContainer;