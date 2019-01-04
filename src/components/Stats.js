import React from 'react';

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

export default Stats;