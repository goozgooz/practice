import React from 'react';
import PropTypes from 'prop-types';

import Crown from './Crown';
import Counter from './Counter';

class Player extends React.PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    highscore: PropTypes.number,
    removePlayer: PropTypes.func,
    player: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.object,
      score: PropTypes.number
    }).isRequired
  }

  render() {
    let {player, changeScore, removePlayer, score, highscore} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <Crown displayCrown = {score >= highscore && highscore !== 0 ? true : false}/>
          <button className="remove-player" onClick={() => removePlayer(player.id)}>✖</button>
          { player.name }
        </span>
  
        <Counter 
          changeScore = {changeScore}
          playerID = {player.id}
          score = {score}
        />
      </div>
    );
  }
}

export default Player;