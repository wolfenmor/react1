import React from 'react';
import Car from "./Car";

const Cars = ({cars}) => {
    return (
        <div>
            {cars.map(car => <Car car={car}/>)}
        </div>
    );
};

export default Cars;