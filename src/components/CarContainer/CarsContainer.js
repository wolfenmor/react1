import React, {useState} from 'react';
import CarForm from "./CarForm";
import Cars from "./Cars";

const CarsContainer = () => {
    const [trigger, setTrigger] = useState();
    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <hr/>
            <Cars trigger={trigger}/>
        </div>
    );
};

export default CarsContainer;