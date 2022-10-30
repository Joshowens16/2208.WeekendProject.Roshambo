import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { setSelectedPlayer } from '../features/leaderboardSlice';
import axios from 'axios';
const PlayerInfo = () => {
    const [loading, setLoading] = useState(true);
    const player = useSelector((state)=> state.leaderboard.selectedPlayer)
    const { playerId } = useParams()
    const dispatch = useDispatch()
    const fetchPlayerInfo = async () => {
        const player = await axios.get(`/api/players/${playerId}`)
        console.log(player.data)
        dispatch(setSelectedPlayer(player.data))
        setLoading(false)
      };
    useEffect(()=>{
        fetchPlayerInfo()
    },[])
if(loading) return <h1>Loading...</h1>
else
return (
        <div>
            <h1>Player Info</h1>
                <h1>Username: {player.username}</h1>
            {
                player.games.map((game)=>{
                    return(
                        <h2>Result: {game.result}</h2>
                    )
                })
            }
        </div>
    );
};

export default PlayerInfo;





// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const PlayerInfo = ({ selectedPlayer }) => {
//     const [player, setPlayer] = useState([])
//     const [loading, setLoading] = useState(false);
//     const getPlayerInfo = async () => {
//         const response = await fetch(`http://localhost:8080/api/players/${selectedPlayer}`);
//         const json = await response.json();
//         setPlayer(json)
//         setLoading(true)
//       };
//       const location = useLocation()
//     useEffect(()=>{
//         getPlayerInfo();
//     },[location.key])
// if(!loading) return <h1>Loading...</h1>
// else
// return (
//         <div>
//             <h1>Player Info</h1>
//                 <h1>Username: {player.username}</h1>
//             {
//                 player.games.map((game)=>{
//                     return(
//                         <h2>Result: {game.result}</h2>
//                     )
//                 })
//             }
//         </div>
//     );
// };

// export default PlayerInfo;


//

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const PlayerInfo = ({ selectedPlayer }) => {
//     const [player, setPlayer] = useState([])
//     const getPlayerInfo = async () => {
//         const response = await fetch(`http://localhost:8080/api/players/${selectedPlayer}`);
//         const json = await response.json();
//         console.log([json])
//         setPlayer([json])
//       };
//     useEffect(()=>{
//         getPlayerInfo();
//     },[])

    
// return (
//         <div>
//             <h1>Player Info</h1>
//             {
//             player.map((index)=> {
//                 return (
//                 <div>
//                     <h1>Username: {index.username}</h1>
//                     {index.games.map((game)=> {
//                         return (
//                             <h2>Result: {game.result}</h2>
//                         )
//                     })}
//                 </div>
//                 )
//             })
//             }
//         </div>
//     );
// };