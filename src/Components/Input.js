import React from 'react';

const TextInput = (props) => <input type='text' {...props} value={props.value} />
const TextArea = (props) => <textarea rows='10' {...props}></textarea>
const Error = ({msg}) => <span className='error-msg'>{msg}!</span>

const Input = (props) => {
    const {label, input, meta: {touched, error}, type} = props;
    return (
        <div>
            <label htmlFor={input.name}>{label} </label>
            {touched && error ? <Error msg={error} /> : null}
            {type === 'text' ? <TextInput {...input} /> : <TextArea {...input} />}
        </div>
    )
}

export default Input;