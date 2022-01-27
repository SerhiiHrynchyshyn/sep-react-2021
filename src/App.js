import React, {useReducer} from 'react';

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}

        case 'reset1':
            return {...state, count1: state.count1 = 1}


        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}

        case 'reset2':
            return {...state, count2: state.count2 = 2}


        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}

        case 'reset3':
            return {...state, count3: state.count3 = 3}
        default:
            throw new Error('error!!!!')
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 1, count2: 2, count3: 3,});

    return (
        <div className={'container'}>
            <div>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec1'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset1'})}>Reset</button>
            </div>
            <div>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec2'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset2'})}>Reset</button>
            </div>
            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec3'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset3'})}>Reset</button>
            </div>
        </div>
    );
};

export default App;