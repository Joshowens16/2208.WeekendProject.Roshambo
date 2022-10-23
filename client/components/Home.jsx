import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <Link to={"/Play"}>
          <button>Play</button>
        </Link>
        <Link to={"/leaderboard"}>
          <button>Leaderboard</button>
        </Link>
        <Link to={"/create-user"}>
          <button>Create Account</button>
      </Link>

        </div>
    );
};

export default Home;