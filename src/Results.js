import React from 'react';

export class Results extends React.Component {


  render() {
    const youWon = this.props.winner === 'You';
    const computerWon = this.props.winner === 'Computer';
    
    return (
    <div>
      <p>You chose {this.props.userChoice}</p>
      <p>The computer chose {this.props.computerChoice}</p>
      {youWon && (
        <p>{this.props.winner} win!</p> )}
      {computerWon && (
        <p>{this.props.winner} wins :(</p> )}
      {!youWon && !computerWon && (
        <p>It's a tie</p>
      )}
    </div>
    )
  }
}