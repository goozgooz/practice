import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const {changeScore, playerID, score} = props;
  // console.log(score)
  return (
    <div className="counter">
      <button 
        className="counter-action decrement"
        onClick = {() => changeScore(playerID, -1)}
      > - </button>
      
      <span className="counter-score"> { score } </span>
      
      <button 
        className="counter-action increment"
        onClick = {() => changeScore(playerID, 1)}
      > + </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number,
  changeScore: PropTypes.func ,
  playerID: PropTypes.object 
};

export default Counter;