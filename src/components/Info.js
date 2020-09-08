import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import o from '../images/0.png'
import x from '../images/1.png'


class Info extends Component{

  state={
    startClick: false,
    startGameClick: false,
    newGameClick: false,
    resetGameClick: false,
    cellsValue: '',
    cellsImage: <div />,
    //turn: this.props.turn
  }

  player1_Input = React.createRef();
  player2_Input = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.players_names(this.player1_Input.current.value, this.player2_Input.current.value); //because of ref
    this.setState({
      startGameClick: true,
      newGameClick: false,
      resetGameClick: false,
      // cellsValue: '',
      // cellsImage: '',
      //turn: this.state.turn
    })
  }
  
  start_click = () => {
    this.setState({startClick: true})
  }

  newGame_Click = () => {
    this.setState({
      newGameClick: true,
      startGameClick: false,
      resetGameClick: false
    })
  }

  resetGame_Click = () => {
    this.setState({
      resetGameClick: true,
      // cellsValue: '',
      // cellsImage: true,
      // turn: 1
      //startGameClick: false
    })
  }

  render(){

    const {
        player1,
        player2,
        turn,
        changeTurn,
        cells_click
    } = this.props

    if (this.state.startClick === false) {
      return(
      
        <div className="start">
          <button className="btn cell niceFont px-3 py-2" onClick={this.start_click}>Start</button>
        </div>
      )
    } else if (this.state.startGameClick === false || this.state.newGameClick === true) {
      return(
        <div className="center">
          <div className='together' >
            <div className="center"> 
              <label className='niceFont'>Name <img className="icon" src={x} alt="X"/> </label>
              <input type='text' ref={this.player1_Input}/>
            </div>
            <div className="center">
              <label className='niceFont'>Name <img className="icon" src={o} alt="O"/> </label>
              <input type='text' ref={this.player2_Input}/>
            </div>  

            </div>
            <button className="btn cell niceFont px-3 py-2" onClick={this.handleSubmit}>Start game</button>
          </div>
      )
    } else if (this.state.startGameClick === true || this.state.resetGameClick === true) {
      return(
        <div>
          <div className='together' >
          <label className='niceFont'><img className="icon" src={x} alt="X"/> {this.props.player1} </label>
          <label className='niceFont'><img className="icon" src={o} alt="O"/> {this.props.player2} </label>
          </div>

          <Board 
            turn={turn}
            changeTurn={changeTurn}
            cells_click={cells_click}
            player1={player1}
            player2={player2}
            cellsValue={this.state.cellsValue}
            cellsImage={this.state.cellsImage}
          />
 
        <div className='together' >
        <button className="btn cell niceFont px-3 py-2" onClick={this.newGame_Click}>New game </button>
        <button className="btn cell niceFont px-3 py-2" onClick={this.resetGame_Click}>Reset</button>
          </div>
        </div> 
      )
    }

  }
}

Info.propTypes = {
  players_names: PropTypes.func,
  player1: PropTypes.string,
  player2: PropTypes.string,
  turn: PropTypes.number,
  changeTurn: PropTypes.func,
  cells_click: PropTypes.number
}

export default Info;
