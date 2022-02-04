import React, {useReducer} from 'react';
import {Cats, Dogs, Form} from "./components";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_cat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}

        case 'add_dog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}

        case 'delete_cat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}

        case 'delete_dog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}


        default:
            return state
    }
}

const App = () => {

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <Form dispatch={dispatch}/>
            <div style={{display: 'flex'}}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};


export default App;