import React from 'react';

import Car from "./Car";

const Cars = ({cars, setCarForUpdate, setCarForDelete}) => {
    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete}/>)}
        </div>
    );
};

export default Cars;