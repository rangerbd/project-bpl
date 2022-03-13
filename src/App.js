import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import playerData from "./data/data.json";
import Player from "./Player/Player";
import Cart from "./Cart/Cart";

function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const playerAdd = (name) => {
    const newCart = [...cart, name];
    setCart(newCart);
    playerName(name);
  };

  const playerName = (name) => {
    const newselect = [...selectedPlayer, name];
    setSelectedPlayer(newselect);
  };

  return (
    <div className="App">
      <h1> Total Player : {players.length}</h1>

      <h2>Total selected Player : {cart.length}</h2>

      <h2>
        Player selected:{" "}
        {selectedPlayer.map((item) => (
          <span key={item.id}>{item.name}, </span>
        ))}
      </h2>

      <Cart cart={cart} playerAdd={playerAdd}></Cart>

      {players.map((player) => (
        <Player player={player} playerAdd={playerAdd} key={player.id}></Player>
      ))}
    </div>
  );
}

export default App;
