import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './data/data.json';

function App() {

const [players ,setPlayers] =useState([]);

useEffect( () => {
  setPlayers(playerData);
  console.log(playerData)
},[])

  return (
    <div className="App">
      <h1> Total player : {players.length}</h1>

      <ul>
        {
          players.map(player => <li>{player.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
