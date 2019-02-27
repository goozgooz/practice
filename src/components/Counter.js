import React from 'react';

const Counter = (props) => {
  const {changeScore, id} = props;
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(-1, id)}> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment" onClick={() => changeScore(1, id)}> + </button>
    </div>
  );

}

export default Counter;