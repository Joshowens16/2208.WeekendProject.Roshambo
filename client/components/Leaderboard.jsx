import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = ({ players, selectedPlayer, setSelectedPlayer }) => {
    const getPlayer = (player) => {
        const selected = player
        setSelectedPlayer(selected)
        console.log(selected)
    }
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
                                    <Link to={`/leaderboard/${player.id}`} onClick={()=> getPlayer(player.id)} >
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