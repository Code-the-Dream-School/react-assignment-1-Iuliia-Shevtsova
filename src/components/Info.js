import React, {Component} from 'react';


class Info extends Component{

  player1_Input = React.createRef();
  player2_Input = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.player1_Input.current.value); //because of ref
    e.currentTarget.reset(); // ref -- reset the form
  }

  render(){
    return(
        <div className='together' onSubmit={this.handleSubmit}>
          {/* <input type='text' ref={this.player1_Input}/>
          <input type='text' ref={this.player2_Input}/> */}
          {/* <label className='niceFont'>Player 1</label>
          <label className='niceFont'>Player 2</label> */}
          {/*<img src=''/>
            <p></p> */}
        </div>
    )
  }
}


export default Info;
