import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {carsActions} from "../../store/slices/carsSlice";

const CarForm = ({setTrigger}) => {
    const {register, reset, handleSubmit} = useForm({
        mode:"onBlur"
    });

    const dispatch = useDispatch()

    const save = (car) => {
        dispatch(carsActions.create(car));
        reset()
        setTrigger(prev => !prev)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={"brand"} {...register("brand", {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: "the brand should have min 1 character and don't have digits"
                    }
                })}/>
                <input type="text" placeholder={"price"} {...register("price", {
                    valueAsNumber: true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type="text" placeholder={"year"} {...register("year", {
                    valueAsNumber: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default CarForm;