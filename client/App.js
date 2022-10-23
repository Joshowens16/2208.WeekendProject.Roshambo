import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Home from "./components/Home";
import PlayerInfo from "./components/PlayerInfo";
import CreateUser from "./components/CreateUser";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const getPlayers = async () => {
    const response = await fetch("http://localhost:8080/api/players");
    const players = await response.json();
    setPlayers(players);
  };
  useEffect(() => {
    getPlayers();
  }, []);
  return (
    <div className="row container">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/leaderboard"}
          element={
            <Leaderboard
              players={players}
              setPlayers={setPlayers}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
            />
          }
        />
        <Route
          path={`/leaderboard/${selectedPlayer}`}
          element={<PlayerInfo selectedPlayer={selectedPlayer} />}
        />
        <Route path={"/create-user"} element={<CreateUser />} />
      </Routes>
    </div>
  );
};

export default App;
