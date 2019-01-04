import React from 'react';
import Header from './Header';
import Player from './Player';
  

class App extends React.Component {
  state = {
    players: [
       {
        id: 1,
        name: "Guil",
        score: 0,
      },
      {
        id: 2,
        name: "Treasure",
        score: 0,
      },
      {
        id: 3,
        name: "Ashley",
        score: 0,
      },
      {
        id: 4,
        name: "James",
        score: 0,
      }
    ]
  };

  handleScoreChange = (playerID, delta) => {
    this.setState(prevState => ({
      players: prevState.players.map(player => {
        if (player.id === playerID) {
          player.score += delta;
          return player;
        } else {
          return player;
        }
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
    console.log(players);
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
      </div>
    );
  }
}

export default App;
