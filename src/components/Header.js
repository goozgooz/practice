import React from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;