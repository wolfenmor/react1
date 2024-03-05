import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../../store/slices/carsSlice";
import {carsService} from "../../services/carsService";

const Car = ({car}) => {
    const {id, brand, year, price} = car;
    const dispatch = useDispatch()
    
    const cut = async () => {
      await carsService.deleteById(id)
        dispatch(carsActions.trigger())
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button>Update</button>
            <button onClick={() => cut()}>Delete</button>
        </div>
    );
};

export default Car;