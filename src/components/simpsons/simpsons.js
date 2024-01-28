import React from 'react';
import Simpson from "./simpson";
const Simpsons = ({items: simpsons}) => {
    return (
        <div>
            {
                simpsons.map((value, index) => <Simpson user={value} key={index}></Simpson>)
            }

        </div>
    );
};

export default Simpsons;