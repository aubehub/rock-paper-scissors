import React from 'react';

export class Scoreboard extends React.Component {
  render() {
    return (
    <>
      <h2>Scoreboard</h2>
      <table>
        <tbody>
          <tr>
            <td>User Score</td>
            <td>Computer Score</td>
          </tr>
          <tr>
            <td id="userScore">{this.props.userScore}</td>
            <td id="computerScore">{this.props.computerScore}</td>
          </tr>
        </tbody>
    </table>  
    </>
    )
  }
}
