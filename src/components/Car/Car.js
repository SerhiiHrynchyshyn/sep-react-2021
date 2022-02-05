import React from 'react';


import './Car.css';
import {deleteCar} from "../../store";
import {useDispatch} from "react-redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={'car'}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};