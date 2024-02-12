import React from 'react';

import Car from "./Car";

const Cars = ({cars, setCarForUpdate, setCarForDelete, cut}) => {
    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete} cut={cut}/>)}
        </div>
    );
};

export default Cars;