import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  const {data, title} = props;
  return (
    <header>
      <Stats data = {data} />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;