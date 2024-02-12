import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/carsService";

const CarsForm = ({setTrigger, carForUpdate, carForDelete}) => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode:"onBlur"
    });

    useEffect(()=> {
        if (carForUpdate){
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save =async (car) => {
      await carsService.create(car)
        setTrigger(prev=>!prev)
        reset()
    }
    const update =async (car) => {
        await carsService.updateById(carForUpdate.id, car)
        setTrigger(prev=>!prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
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
            <button disabled={!isValid}>
                {carForUpdate?"Update":(carForDelete?"Delete":"Save")}
            </button>
            {errors.brand && <div>{errors.brand.message}</div>}
        </form>
    );
};

export default CarsForm;