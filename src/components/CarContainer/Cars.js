    import React, {useEffect} from 'react';
    import {carsService} from "../../services/carsService";
    import {useDispatch, useSelector} from "react-redux";
    import {carsActions} from "../../store/slices/carsSlice";
    import Car from "./Car";

    const Cars = () => {
        const dispatch = useDispatch();
        const {cars, trigger} = useSelector(state => state.cars)
       
        useEffect(()=> {
        carsService.getAll().then(({data}) => dispatch(carsActions.setResponse(data)))
        }, [dispatch, trigger])
        return (
            <div>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        );
    };

    export default Cars;