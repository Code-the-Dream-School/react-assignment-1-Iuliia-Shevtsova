import React, {Component} from 'react';
import Board2 from './Board2';
import o from '../images/0.png'
import x from '../images/1.png'


class Info extends Component{

  state={
    startClick: false,
    startGameClick: false
  }

  player1_Input = React.createRef();
  player2_Input = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.players_names(this.player1_Input.current.value, this.player2_Input.current.value); //because of ref
    this.setState({startGameClick: true})
  }
  
  start_click = () => {
    this.setState({startClick: true})
  }

  render(){
    if (this.state.startClick === false) {
      return(
      
        <div className="start">
          <button className="btn cell niceFont px-3 py-2" onClick={this.start_click}>Start</button>
        </div>
      )
    } else if (this.state.startGameClick === false) {
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
    } else if (this.state.startGameClick === true) {
      return(
        <div>
          <div className='together' >
          <label className='niceFont'><img className="icon" src={x} alt="X"/> {this.props.player1} </label>
          <label className='niceFont'><img className="icon" src={o} alt="O"/> {this.props.player2} </label>
          </div>

          <Board2 
            turn={this.props.turn}
            changeTurn={this.props.changeTurn}
            cells_click={this.props.cells_click}
          />
 
        <div className='together' >
        <button className="btn cell niceFont px-3 py-2" >New game</button>
        <button className="btn cell niceFont px-3 py-2" >Reset</button>
          </div>
        </div> 
      )
    }
    
  }
}


export default Info;
