import React from 'react';
import './App.css';
import { Results } from './Results';
import { Scoreboard } from './Scoreboard';
import { ImgResults } from './ImgResults';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userScore: 0,
      computerScore: 0,
      userChoice: '',
      computerChoice: '',
      winner:''
    }
    this.getUserChoice = this.getUserChoice.bind(this);
    this.getComputerChoice = this.getComputerChoice.bind(this);
  }

  getUserChoice(userChoice){
    this.setState({userChoice:userChoice})
    const compChoice = this.getComputerChoice()
    this.defineWinner(userChoice, compChoice)
  }

  getComputerChoice(){
    const possibleComputerChoices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    let compChoice = possibleComputerChoices[randomNumber];
    
    this.setState({computerChoice:compChoice})
    return compChoice;
  }

  defineWinner(userChoice, compChoice) {
    let nextUserScore = this.state.userScore;
    let nextCompScore = this.state.computerScore;
    let nextWinner;

    if (userChoice === compChoice) {
    } else if (userChoice === 'rock') {
      if (compChoice === 'paper'){
        nextCompScore +=1;
        nextWinner = 'Computer'
      } else {
        nextUserScore +=1;
        nextWinner = 'You'
      }
    } else if (userChoice ==='paper') {
      if (compChoice === 'rock') {
        nextUserScore +=1;
        nextWinner = 'You'
      } else {
        nextCompScore +=1;        
        nextWinner = 'Computer'
      }
    } else if (userChoice === 'scissors') {
      if (compChoice === 'rock') {
        nextCompScore +=1;
        nextWinner = 'Computer'
      } else {
        nextCompScore +=1;
        nextWinner = 'You'
      }
    }
    this.setState({
      userScore:nextUserScore,
      computerScore:nextCompScore,
      winner:nextWinner
    })
  }


  render() {
    return (
      <div className="wrap">
        <h1>Rock, Paper or Scissors</h1>
          <p>Make your choice: rock beats scissors, scissors beats paper and paper beats rock.</p>
        {/* JSON.stringify(this.state) */} 
 
          {/*this.state.userChoice === '' ? (
            <img src="img/piedra-papel-tijeras.png"/>
          ) : (null)*/}

            {this.state.userChoice === '' && (
              <div className="img-space">
                <img src="img/piedra-papel-tijeras.png" alt="tijeras"/>
              </div>
            )}
          
          <ImgResults playerChoice={this.state.userChoice}/>
          <ImgResults playerChoice={this.state.computerChoice}/>
          
          {this.state.userChoice !== '' && (
          <Results userChoice={this.state.userChoice}
            computerChoice={this.state.computerChoice}
            winner={this.state.winner}
            />
          )}


          <div className="score-board">
            <Scoreboard userScore={this.state.userScore}
              computerScore={this.state.computerScore}
            />
          </div>
          
          <div className="btns-div">
            <button className="rock" onClick={() => this.getUserChoice("rock")}>Rock</button>
            <button className="paper" onClick={() => this.getUserChoice("paper")}>Paper </button>
            <button className="scissors" onClick={() => this.getUserChoice("scissors")}>Scissors</button>
          </div>
      </div>
    )
  }
}

export default App;
