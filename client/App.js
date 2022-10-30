import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Home from "./components/Home";
import PlayerInfo from "./components/PlayerInfo";
import CreateUser from "./components/CreateUser";
import { useDispatch, useSelector } from "react-redux";
import { setLeadboard } from "./features/leaderboardSlice";
import axios from "axios";

const App = () => {
  return (
    <div className="row container">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/leaderboard"} element={<Leaderboard />} />
        <Route path={"/games/:playerId"} element={<PlayerInfo />} />
        <Route path={"/create-user"} element={<CreateUser />} />
      </Routes>
    </div>
  );
};

export default App;
