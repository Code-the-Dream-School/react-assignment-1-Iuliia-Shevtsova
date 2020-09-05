import React, {Component} from 'react';
// import Board from './Board';
import Header from './Header';
import Info from './Info';

class Game extends Component {

  state = { 
    turn: 1,
    cells_click: 0,
    player1: "",
    player2: "",
    // startGameClick: false
  } 

  handleTurnChange = () => {
    if (this.state.turn === 1) 
    {
      this.setState( prevState => ({
          turn: prevState.turn = 2,
          cells_click: prevState.cells_click+=1
      }));
    } else {
      this.setState( prevState => ({
          turn: prevState.turn = 1,
          cells_click: prevState.cells_click+=1
      }));
    }
  }

  addNames = (name1, name2) => {
    this.setState({
      player1: name1,
      player2: name2
    })
  }
 
  render(){
    return (
      <div className='container'>
        <Header />
        <Info 
        players_names={this.addNames}
        player1={this.state.player1}
        player2={this.state.player2}
        turn={this.state.turn}
        changeTurn={this.handleTurnChange}
        cells_click={this.state.cells_click}
        // startGame={this.state.startGameClick}
        />
      </div>
    );
  }
} 

export default Game;
