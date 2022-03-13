import React from "react";
import "./Player.css";

const Player = (props) => {
  const { name, country, salary, age, image } = props.player;

  return (
    <div className="playerStyle">
      <div>
        <img
          style={{ width: "200px", height: "200px" }}
          src={props.player.image}
        />
      </div>

      <div>
        <h5>Player's name : {name} </h5>
        <h6>players origin: {country}</h6>
        <h6>Age : {age}</h6>
        <h6>salary: {salary}</h6>

        <button onClick={() => props.playerAdd(props.player)}>
          Add player
        </button>
      </div>
    </div>
  );
};

export default Player;
