import React from 'react';
import Counter from './Counter';

const Player = (props) => {
  const {id, score, changeScore, removePlayer} = props;
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        { props.name }
      </span>

      <Counter 
        id = {id}
        score = {score}
        changeScore = {changeScore}
      />
    </div>
  );
}

export default Player;