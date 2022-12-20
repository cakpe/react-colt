import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };

  // TODO: set initial state
  state = {
    hasWon: false,
    board: this.createBoard()
  };

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for(let row = 0; row<this.props.nrows; row++) {
      let realRow = [];
      for(let col = 0; col<this.props.ncols; col++) {
        //what the below line is doing is generating a random number between 0 and 1, and then checking if it's
        //less than our chanceLightStartsOn prop
        realRow.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(realRow);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround = (coord) => { //DON'T FORGET TO BIND THE FUNCTION
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y,x);
    flipCell(y, x-1);
    flipCell(y, x+1);
    flipCell(y-1, x);
    flipCell(y+1, x);

    // win when every cell is turned off
    let hasWon = board.every(row => row.every(cell => !cell))

    this.setState({board: board, hasWon: hasWon});
  }


  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    if(this.state.hasWon) {
      return (<h1>You won!!!</h1>);
    }

    // make table board
    let tblBoard = [];
    for(let row = 0; row<this.props.nrows; row++) {
      let realRow = [];
      for(let col = 0; col<this.props.ncols; col++) {
        let coord = `${row}-${col}`;
        realRow.push(
        <Cell key={coord} isLit={this.state.board[row][col]} flipCellsAroundMe={this.flipCellsAround} coord={coord}/>
        );
      }
      tblBoard.push(<tr key={row}>{realRow}</tr>);
    }

    return (
      <table>
        <tbody>
          {tblBoard}
        </tbody>
      </table>
    );
  }
}


export default Board;
