import React, {Component} from 'react';
import Board from './Board';
import Header from './Header';
import Info from './Info';

class Game extends Component {

  state = { 
    turn: 1,
    cells_click: 0
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
 
  render(){
    return (
      <div className='container'>
        <Header />
        <Info />
        <Board 
          turn={this.state.turn}
          changeTurn={this.handleTurnChange}
          cells_click={this.state.cells_click}
        />
      </div>
    );
  }
}

export default Game;
