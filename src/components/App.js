import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ],
    totalPoints: 0,
  };

  handleScoreChange = (value, id) => {
    this.setState(prevState => ({
      players: prevState.players.map(p => {
        if (p.id === id) {
          p.score += value;
        }
        return p;
      }),
      totalPoints: prevState.totalPoints += value
    }))
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(p => p.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
          totalPoints={this.state.totalPoints}
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
            score={player.score}
          />
        )}
      </div>
    );
  }
}

export default App;
