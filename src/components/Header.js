import React from 'react';
import Stats from './Stats';

const Header = (props) => {
  const {players, title, totalPoints} = props;
  return (
    <header>
      <Stats
        players = {players} 
        totalPoints = {totalPoints}
      />
      <h1>{ title }</h1>
    </header>
  );
}

export default Header;