import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
    const {data} = props;
    const players = data.length;
    const totalPoints = data.reduce((total, player) => total + player.score, 0);
    return (
         <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>{players}</td>
            </tr>
            <tr>
              <td>Total Points:</td>
              <td>{totalPoints}</td>
            </tr>
          </tbody>
        </table>   
    );
}

Stats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};

export default Stats;