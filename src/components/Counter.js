import React from 'react';

const Counter = (props) => {
  const {changeScore, playerID, score} = props;

  return (
    <div className="counter">
      <button 
        className="counter-action decrement"
        onClick = {() => changeScore(-1)}
      > - </button>
      
      <span className="counter-score"> { score } </span>
      
      <button 
        className="counter-action increment"
        onClick = {() => changeScore(1)}
      > + </button>
    </div>
  );
}

export default Counter;