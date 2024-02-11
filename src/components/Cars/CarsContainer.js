import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/carsService";
import CarsForm from "./CarsForm";
import Cars from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)

    useEffect(()=> {
        carsService.getAll().then(({data})=> setCars(data))
    }, [trigger])

    const [carForUpdate, setCarForUpdate] = useState(null);

   const [carForDelete, setCarForDelete] = useState(null);
    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} carForDelete={carForDelete}/>
            <hr/>
            <Cars cars={cars} key={cars.id} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete}/>
        </div>
    );
};

export default CarsContainer;