import React from 'react';

const Car = ({car}) => {
    const {brand,price,year} = car;
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <br/>
        </div>
    );
};

export default Car;