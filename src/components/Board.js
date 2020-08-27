import React, {Component}  from 'react';
import Cell from './Cell';

class Board extends Component {
    
    addCells = () => {
        let cells = [];
        for (let i = 0; i < 9; i++) {
            cells.push({
                id: i,
                value: '',
                click_count: 0
            });
        }
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
                <div className='row'>
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
            this.setState( prevState => ({
                value: prevState.cells[index].value = 'X',
                click_count: prevState.cells[index].click_count +=1
            })); 
        } else if (this.props.turn === 2) {
            this.setState( prevState => ({
                value: prevState.cells[index].value = 'O',
                click_count: prevState.cells[index].click_count+=1
            })); 
        }
    }

    winner = (value) => {
        
        let cells = this.state.cells;
        if ((cells[0].value === value && cells[0].value === cells[1].value && cells[0].value === cells[2].value)
            || (cells[3].value === value && cells[3].value === cells[4].value && cells[3].value === cells[5].value)
            || (cells[6].value === value && cells[6].value === cells[7].value && cells[6].value === cells[8].value)

            || (cells[0].value === value && cells[0].value === cells[3].value && cells[0].value === cells[6].value)
            || (cells[1].value === value && cells[1].value === cells[4].value && cells[1].value === cells[7].value)
            || (cells[2].value === value && cells[2].value === cells[5].value && cells[2].value === cells[8].value)

            || (cells[0].value === value && cells[0].value === cells[4].value && cells[0].value === cells[8].value)
            || (cells[2].value === value && cells[2].value === cells[4].value && cells[2].value === cells[6].value)
            ) {
            console.log(`${value} is a winner`)
            //this.setState({winner: value})
        }
    }
 
    render(){
        var cells = this.state.cells.map( (cell) =>
            <Cell 
                id={cell.id}
                value={cell.value}
                key={cell.id.toString()}
                changeValue={this.handleValueChange}
                index={cell.id}
                turn = {this.props.turn}
                changeTurn={this.props.changeTurn}
                click_count={cell.click_count}
                //winner={cell.winner}
                winner_check={cell.value !== '' ? this.winner(cell.value): ''}
            />
        )

        console.log(cells)
        return(
            <div className='board'>
                {this.fill_board(cells)}
                
            </div>
        );
    }
}

export default Board;
