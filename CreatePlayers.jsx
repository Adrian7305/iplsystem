import React from "react";
import axios from "axios";
import { useState } from "react";

const CreatePlayers = () => {
    const [values,setValues] = useState({
        player_id : "" , player_name : "" , nationality : "" , role : "" , playing_style  : " " , team_id: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3030/create_players',values)
        .then(res => console.log(res))
        .catch (err => console.log(err))

    }
  return (
    <div className="d-flex align-items-center flex-column mt-3 ">
        <h1>ADD PLAYER</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="playerid" class="form-label">
            Player ID
          </label>
          <input
            type="text"
            class="form-control"
            id="playerid"
            placeholder="Enter Player ID"
            name="playerid"
            onChange={(e)=> setValues({...values, player_id : e.target.value})}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="playerName" class="form-label">
            Player Name
          </label>
          <input
            type="text"
            class="form-control"
            id="playerName"
            placeholder="Enter Player Name"
            name="playerName"
            onChange={(e)=> setValues({...values, player_name : e.target.value})}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="nationality" class="form-label">
            Nationality
          </label>
          <input
            type="text"
            class="form-control"
            id="Nationality"
            placeholder="Enter Player Nationality"
            name="nationality"
            onChange={(e)=> setValues({...values, nationality : e.target.value})}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="role" class="form-label">
            Role
          </label>
          <input
            type="text"
            class="form-control"
            id="role"
            placeholder="Enter Player Role"
            name="role"
            onChange={(e)=> setValues({...values, role : e.target.value})}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="playingStyle" class="form-label">
            Playing Style
          </label>
          <input
            type="text"
            class="form-control"
            id="playingStyle"
            placeholder="Enter Player playingStyle"
            name="playingStyle"
            onChange={(e)=> setValues({...values, playing_style : e.target.value})}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="teamid" class="form-label">
            Team ID
          </label>
          <input
            type="text"
            class="form-control"
            id="teamid"
            placeholder="Enter Team ID"
            name="teamid"
            onChange={(e)=> setValues({...values, team_id : e.target.value})}
          />
        </div>
        <button type="submit" class="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePlayers;
