import React, {Component}  from 'react';

 
class  Cell extends Component {

  render(){
    
    return(
      <button className='btn btn-outline-dark square' onClick={() => {
      this.props.changeValue(this.props.index);
      this.props.changeTurn();
      //this.props.count;
      }

        }>
      {this.props.value}</button>
      
    );
  }

}
export default Cell;
