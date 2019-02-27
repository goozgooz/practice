import React from 'react';

const Stats = (props) => {
  const {players, totalPoints} = props;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players: </td>
          <td>{players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Stats;