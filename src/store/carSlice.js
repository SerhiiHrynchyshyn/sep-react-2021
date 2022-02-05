import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name:'carSlice',
    initialState:{
        cars: [],
        status: null,
        error: null
    },
    reducers:{
        addCar:(state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar:(state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        }
    },
    extraReducers:{}
});

const carReducer = carSlice.reducer;
export default carReducer;

export const {addCar, deleteCar} = carSlice.actions;