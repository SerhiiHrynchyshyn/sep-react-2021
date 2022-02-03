import React from 'react';
import useForm from "use-hook-form";

const Form = () => {

    const {handleSubmit, register, reset} = useForm();

    return (
        <div>
            <form>
                <label>Dog<input type="text" {...register('dog')}/></label>
                <button>Add Dog</button>
                <label>Dog<input type="text" {...register('cat')}/></label>
                <button>Add Cat</button>
            </form>
        </div>
    );
};

export {Form};