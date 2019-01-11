import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Player extends React.PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    player: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.object,
      score: PropTypes.number
    }).isRequired
  }
  
  render() {
    let {player, changeScore, removePlayer} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(player.id)}>✖</button>
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