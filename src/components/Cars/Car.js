import React from 'react';

const Car = ({car, setCarForUpdate, cut}) => {
    const {brand,price,year} = car;
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> cut(car)}>delete</button>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <br/>
        </div>
    );
};

export default Car;