import React, {PureComponent}  from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import x from '../images/1.png'
import o from '../images/0.png'


class Board extends PureComponent {
    
    addCells = () => {
        let cells = [];
        for (let i = 0; i < 9; i++) {
            cells.push({
                id: i,
                value: this.props.cellsValue,
                image: this.props.cellsImage,
                click_count: 0,
                key: i.toString(),
                turn: this.props.turn 
            });
        } 
        console.log(cells);
        return cells;
    } 
    
    state = {
        cells: this.addCells(),
        winner: ''
    }

    fill_board = (cells) => {
        let board = [ [], [], [] ]
        let n = 0;
        for (let i=0; i<3; i++){
            board.push(
                <div key={i.toString()} className='row'>
                    {cells[n]}
                    {cells[n+1]}
                    {cells[n+2]}
                </div>
            )             
            n+=3; 
        }
        return board;
    }

    handleValueChange = (index) => {  
        if (this.props.turn === 1) {
            this.setState( prevState => {
               return { 
                    image: prevState.cells[index].image = <img className="icon" src={x} alt="X"/>,
                    value: prevState.cells[index].value = 'X',
                    click_count: prevState.cells[index].click_count +=1
                }})
        } else if (this.props.turn === 2) {
            this.setState( prevState => {
                return { 
                    image: prevState.cells[index].image = <img className="icon" src={o} alt="O"/>,
                    value: prevState.cells[index].value = 'O',
                    click_count: prevState.cells[index].click_count +=1
                }})
        }
    }

    winner = (value) => {    
        let cells = this.state.cells;
        console.log(cells)
        //if (value !== '') {
            console.log('Winner check function. Cell value = ', value);
            if ((cells[0].value === value && cells[0].value === cells[1].value && cells[0].value === cells[2].value)
            || (cells[3].value === value && cells[3].value === cells[4].value && cells[3].value === cells[5].value)
            || (cells[6].value === value && cells[6].value === cells[7].value && cells[6].value === cells[8].value)

            || (cells[0].value === value && cells[0].value === cells[3].value && cells[0].value === cells[6].value)
            || (cells[1].value === value && cells[1].value === cells[4].value && cells[1].value === cells[7].value)
            || (cells[2].value === value && cells[2].value === cells[5].value && cells[2].value === cells[8].value)

            || (cells[0].value === value && cells[0].value === cells[4].value && cells[0].value === cells[8].value)
            || (cells[2].value === value && cells[2].value === cells[4].value && cells[2].value === cells[6].value)
            ) {
                console.log(`${value} is a winner`);
                this.setState({
                    winner: value
                })
            }
        //} else {console.log('Winner check function. Cell value = ', value);}    
    } 
    
    render(){

        const { changeTurn } = this.props

        if (this.state.winner === '')
        {
            return(
                <div className='board'>               
                    {this.fill_board(
                        this.state.cells.map( (cell) =>
                            <Cell 
                                id={cell.id}
                                value={cell.value}
                                image={cell.image}
                                key={cell.key}
                                changeValue={this.handleValueChange}
                                index={cell.id}
                                turn = {cell.turn}
                                changeTurn={changeTurn}
                                click_count={cell.click_count}
                                winner_check={this.winner}
                            />
                        )
                    )}                
                </div>           
            ); 
        } else if (this.state.winner === 'X'){
            return (
                <div className='center'>
                    <h2> Player 1 wins with <img className="icon" src={x} alt="X"/></h2>
                </div>
            )
        } else if (this.state.winner === 'O'){
            return (
                <div className='center'>
                    <h2> Player 2 wins with <img className="icon" src={o} alt="O"/></h2>
                </div>
            )
        }
               
    }
}

Board.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.object),
    turn: PropTypes.number,
    changeTurn: PropTypes.func,
    cells_click: PropTypes.number,
    player1: PropTypes.string,
    player2: PropTypes.string,
    cellsValue: PropTypes.string,
    cellsImage: PropTypes.element,
    id: PropTypes.number,
    key: PropTypes.number,
    winner_check: PropTypes.func
}

export default Board;
