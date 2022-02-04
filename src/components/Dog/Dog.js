import React from 'react';

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: 'delete_dog', payload: {id}})}>Delete</button>
        </div>
    );
};

export {Dog};