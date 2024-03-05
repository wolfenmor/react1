import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {carsActions} from "../../store/slices/carsSlice";
import {carsService} from "../../services/carsService";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm({
        mode:"onBlur"
    });



    const dispatch = useDispatch()

    const save = async (car) => {
        await carsService.create(car)
        dispatch(carsActions.trigger())
        reset()
    };

    const update = async (car) => {
        await carsService.updateById(carForUpdate.id, car)
        dispatch(carsActions.trigger())
        dispatch(carsActions.setCarForUpdate(null))
        reset()
    }

    const {carForUpdate} = useSelector(state => state.cars)
    useEffect(()=> {
        if (carForUpdate){
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update: save)}>
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
                <button>{carForUpdate?"update": "save"}</button>
            </form>
        </div>
    );
};

export default CarForm;