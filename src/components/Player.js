import React from 'react';
import Counter from './Counter';

const Player = (props) => {
  console.log(props);
  let {player, changeScore} = props;
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(player.id)}>✖</button>
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

export default Player;