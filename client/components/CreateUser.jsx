import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../features/leaderboardSlice';
const CreateUser = () => {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch();
const inputHandler = () => {
    const input = event.target.value;
    setUsername(input)
}
const submitHandler = (event) => {
    event.preventDefault();
    console.log(`username in scope ${username}`)
    const body = { username }
    dispatch(addPlayer(body))
    axios.post('api/players', body);
    console.log(playerLeaderboard)

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