import React, {useState} from 'react';

const Form = ({getFilter}) => {
    let [form, setform] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]:e.target.value}
        setform({...form, ...eventData});
    }

    const onSubmit = (e) => {
      e.preventDefault();
        getFilter(form);
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>UserName: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>mail: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Form;