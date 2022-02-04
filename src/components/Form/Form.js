import React, {useRef} from 'react';

const Form = ({dispatch}) => {

    const catInput = useRef();
    const dogInput = useRef();


    const saveCat = () => {
        dispatch({type: 'add_cat', payload:{cat: catInput.current.value}})
    }

    const saveDog = () => {
        dispatch({type: 'add_dog', payload:{dog: dogInput.current.value}})
    }
    const submit = (e) => {
        e.preventDefault()
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>Cat: <input type="text" ref={catInput}/></label>
                <button onClick={saveCat}>Add Cat</button>
                <label>Dog: <input type="text" ref={dogInput}/></label>
                <button onClick={saveDog}>Add Dog</button>
            </form>
        </div>
    );
};

export {Form};