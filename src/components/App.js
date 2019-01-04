import React from 'react';
import Header from './Header';
import Player from './Player';
  

class App extends React.Component {
  state = {
    players: {
      1: {
        name: "Guil",
        score: 0,
      },
      2: {
        name: "Treasure",
        score: 0,
      },
      3: {
        name: "Ashley",
        score: 0,
        id: 3
      },
      4: {
        name: "James",
        score: 0,
        id: 4
      }
    }
  };

  handleScoreChange = (playerID, delta) => {
    console.log('derp')
    // this.setState ( prevState => {
    //   return {
    //     players: prevState.players.map(p )
    //   }
    // })
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {

    let {players} = this.state;

    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={players.length} 
        />
  
        {Object.keys(players).map((player, i) =>
          <Player 
            changeScore = {this.handleScoreChange}
            key={i} 
            player = {players[player]}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
