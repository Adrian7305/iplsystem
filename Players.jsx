import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5">
        <Link to="/create_players" className="btn btn-success">Create Players</Link>
        {players.length !==0 ? 
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Player Name</th>
            <th scope="col">Nationality</th>
            <th scope="col">Role</th>
            <th scope="col">Playing Style</th>
            <th scope="col">Team ID</th>
          </tr>
        </thead>
        <tbody>
          {
          players.map(players=>
            <tr key={players.player_id}>
                <td>{players.player_id}</td>
                <td>{players.player_name}</td>
                <td>{players.nationality}</td>
                <td>{players.role}</td>
                <td>{players.playing_style}</td>
                <td>{players.team_id}</td>
            </tr>
          )
          }
        </tbody>
      </table>
        :<h2>No Records</h2>
        }
    </div>
  );
};

export default Players;
