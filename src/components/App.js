import React from 'react';
import uuid from 'uuid/v4';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

  

class App extends React.Component {
  state = {
    players: [
       {
        id: new uuid(),
        name: "Guil",
        score: 0,
      },
      {
        id: new uuid(),
        name: "Treasure",
        score: 0,
      },
      {
        id: new uuid(),
        name: "Ashley",
        score: 0,
      },
      {
        id: new uuid(),
        name: "James",
        score: 0,
      }
    ]
  };

  handleAddPlayer = (playerName) => {
    let newPlayer = {
      id: new uuid(),
      name: playerName,
      score: 0,
    };
    
    this.setState({players: [...this.state.players, newPlayer]});
  }

  handleScoreChange = (id, delta) => {
    this.setState(prevState => ({
      players: prevState.players.map(player => {
        if(player.id === id) {
          player.score += delta;
        }
        return player;
      })
    }))
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }

  render() {
    let {players} = this.state;
    
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          data={players}
        />
  
        {players.map((player, i) =>
          <Player 
            changeScore = {this.handleScoreChange}
            key={i} 
            player = {player}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        
        <AddPlayerForm
          handleAddPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
