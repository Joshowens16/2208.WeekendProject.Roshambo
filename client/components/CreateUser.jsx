import React, { useState } from 'react';
import axios from 'axios';
const CreateUser = () => {
    const [username, setUsername] = useState('')
const inputHandler = () => {
    const input = event.target.value;
    setUsername(input)
    console.log(username)
}
const submitHandler = (event) => {
    event.preventDefault();
    console.log(`username in scope ${username}`)
    const body = { username }
    axios.post('api/players', body);
}
    return (
        <div>
            <form>
                <input
                onChange={inputHandler}
                value={username}
                id="user-name"
                class="form-field"
                type="text"
                placeholder="User Name"
                name="userName"
                />
                <button class="form-field" type="submit" onClick={submitHandler}>
                Register
                </button>
            </form>
        </div>
    );
};

export default CreateUser;