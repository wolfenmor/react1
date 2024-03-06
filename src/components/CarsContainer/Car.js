import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../../store/slices/carsSlice";
import {carsService} from "../../services/carsService";

const Car = ({car}) => {
    const {id, brand, price ,year} = car;

    const dispatch = useDispatch()
    const cut = async () => {
        await carsService.deleteById(id)
      dispatch(carsActions.trigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => cut()}>Delete</button>
            <br/>
        </div>
    );
};

export default Car;