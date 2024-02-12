import React, {useEffect, useState} from 'react';

import {carsService} from "../../services/carsService";
import CarsForm from "./CarsForm";
import Cars from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)

    const [carForUpdate, setCarForUpdate] = useState(null);

    const [carForDelete, setCarForDelete] = useState(null);

    useEffect(()=> {
        carsService.getAll().then(({data})=> setCars(data))
    }, [trigger])

    useEffect(()=> {
        if (carForDelete){
            carsService.deleteById(carForDelete.id).then(()=> {
                setTrigger(prev=>!prev)
                setCarForDelete(null);
            })
        }
    },[carForDelete])

    const cut = async (car) => {
            await carsService.deleteById(car.id)
            setTrigger(prev=>!prev)
    }
    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} carForDelete={carForDelete}/>
            <hr/>
            <Cars cars={cars} key={cars.id} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete} cut={cut}/>
        </div>
    );
};

export default CarsContainer;