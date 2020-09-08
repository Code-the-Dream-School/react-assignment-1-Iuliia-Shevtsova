import React, {Component}  from 'react';
import PropTypes from 'prop-types';

 
class  Cell extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value){ //the previous value will not equal the current value only if  
    //this cell was clicked, it meant this cell's value will be changed from '' to 'X' or 'O' 
    //(otherwise value will still = '' and the function 'winner_check' will not execute for this cell) 
      this.props.winner_check(this.props.value);
    }
  }

  render(){

    const {
      changeValue,
      changeTurn,
      index,
      image
    } = this.props;
    
    return(
      <button className='btn btn-outline-dark square' onClick={() => {
          changeValue(index);
          changeTurn();
          }
        }>
      {image}</button> 
    );
  }

}

Cell.propTypes = {
  changeValue: PropTypes.func,
  changeTurn: PropTypes.func,
  winner_check: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.element,
  value: PropTypes.string
}

export default Cell;
