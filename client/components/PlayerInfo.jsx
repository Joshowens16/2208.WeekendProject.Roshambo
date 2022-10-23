import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerInfo = ({ selectedPlayer }) => {
    const [player, setPlayer] = useState([])
    // const [games, setGames] = useState([])
    const getPlayerInfo = async () => {
        const response = await fetch(`http://localhost:8080/api/players/${selectedPlayer}`);
        const json = await response.json();
        console.log([json])
        setPlayer([json])
      };
    useEffect(()=>{
        getPlayerInfo();
    },[])

    console.log(player)
    return (
        <div>
            <h1>Player Info</h1>
            {
            player.map((index)=> {
                return (
                <div>
                    <h1>Username: {index.username}</h1>
                    {index.games.map((game)=> {
                        return (
                            <h2>Result: {game.result}</h2>
                        )
                    })}
                </div>
                )
            })
            }
        </div>
    );
};

export default PlayerInfo;