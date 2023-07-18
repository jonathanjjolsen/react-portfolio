import React, { useState } from 'react';

export default function ContactForm () {
    const [input, setInput] = useState({ name: '', email: '', message: '',});

    const [validationMessage, setValidationMessage] = useState('');

    //Updates state of input fields with useState hook
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    //Regex to test email structure
    const emailValidation = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //destructuring to extract the properties from input
        const { name, email, message } = input;
        
        //Validating input fields
        if(!name.trim()){
            setValidationMessage('Please enter your name.');
            return;
        }
        if(!emailValidation(email)) {
            setValidationMessage('Please enter a valid email address.');
            return;
        }
        if(!message.trim()) {
            setValidationMessage('A message is required.');
            return;
        };
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Please enter your info below!</h2>
            </div>
            <div>
                <label>
                    Name:
                    <input type='text' name='name' value={input.name} onChange={handleInputChange}/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type='text' name='email' value={input.email} onChange={handleInputChange}></input>
                </label>
            </div>
            <div>
                <label>
                    Message:
                    <input type='text' name='message' value={input.message} onChange={handleInputChange}></input>
                </label>
            </div>
            <div>
                {/* Renders the error message only if validation of input fails */}
                {validationMessage && <p className='error-message'>{validationMessage}</p>}
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
}