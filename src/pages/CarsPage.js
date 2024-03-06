import React from 'react';
import Cars from "../components/CarsContainer/Cars";
import CarsForm from "../components/CarsContainer/CarsForm";

const CarsPage = () => {
    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default CarsPage;