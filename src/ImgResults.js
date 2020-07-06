import React from 'react';

export class ImgResults extends React.Component {
  render() {
    if (this.props.playerChoice === 'rock'){
      return <img src="img/piedra.png" alt="piedra" id="piedra"></img>
    } else if (this.props.playerChoice === 'paper'){
      return <img src="img/papel.png" alt="papel"></img>
    } else if (this.props.playerChoice === 'scissors') {
      return <img src="img/tijera.png" alt="tijera" id="tijera"></img>
    } else {
      return null;
    }
  }
}

