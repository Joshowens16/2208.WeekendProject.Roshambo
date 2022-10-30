import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLeadboard } from '../features/leaderboardSlice';


const Leaderboard = () => {
    const [loading, setLoading] = useState();
    const players = useSelector(
        (state) => state.leaderboard.playerLeaderboard
    );
    const dispatch = useDispatch();
    const fetchPlayers = async () => {
        const players = await axios.get("/api/players")
        console.log(players.data)
        dispatch(setLeadboard(players.data))
        setLoading(false)
    }
    useEffect(()=> {
        fetchPlayers();
    },[])
    if(loading) return "Loading..."
    return (
        <div>
            <h1>
                Leaderboard!
            </h1>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2>Player ID</h2>
                            </td>
                            <td>
                                <h2>Player Name</h2>
                            </td>
                        </tr>
                            {players.map((player)=>{
                    return (<tr>
                                <td>
                                    <h3>{player.id}</h3>
                                </td>
                                <td>
                                    <Link to={`/games/${player.id}`} onClick={()=> getPlayer(player.id)} key={player.id} >
                                    <h3>{player.username}</h3>
                                    </Link>
                                </td>
                                </tr>)
                            })}
                    </tbody>
                </table>

        </div>
    );
};

export default Leaderboard;