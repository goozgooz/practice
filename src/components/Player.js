import React from 'react';
import Counter from './Counter';

class Player extends React.PureComponent {
  render() {
    let {player, changeScore} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(player.id)}>✖</button>
          { player.name }
        </span>
  
        <Counter 
          changeScore = {changeScore}
          playerID = {player.id}
          score = {player.score}
        />
      </div>
    );
  }
}

export default Player;