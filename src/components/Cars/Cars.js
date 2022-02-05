import React from 'react';
import {useSelector} from "react-redux";

import './Cars.css';
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['cars']);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            <div className={'cars'}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};