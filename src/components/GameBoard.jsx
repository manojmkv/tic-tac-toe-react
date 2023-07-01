import React from "react";
import Square from "./square";

const GameBoard = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [isX, setisX] = React.useState(true);
    const [isWinner, setIsWinner] = React.useState(false);
    const handleClick = (i) => {
        squares[i] = isX ? 'X' : 'O';
        setSquares(squares);
        let win = calculateWinner(squares);
        let winner = win.length ? true : false;
        setIsWinner(winner);
        setisX(!isX);
    }

    const handleRestart = () => {
        setisX(true);
        setSquares(Array(9).fill(null));
        setIsWinner(false);
    }

    const renderSquare = (index) => {
        return <Square value={squares[index]} onClick={() => (squares[index] === null && !isWinner) ? handleClick(index) : false}/>
    }
        return (
            <div className="game-board">
                <div>{isWinner ? `${isX ? 'X' : 'O'} Wins` : `Current player: ${isX ? 'X' : 'O'}`}</div>
                {isWinner ? (
                    <div class="pyro">
                    <div class="before"></div>
                    <div class="after"></div>
                </div>
                ) : null }
                
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
                <h1 class="status">{isWinner ? `${ !isX ? 'X' : 'O'} Wins` : `Current player: ${isX ? 'X' : 'O'}`}</h1>
                <button className="restart-button" onClick={handleRestart}>Reset Game</button>
            </div>
        ) 
    }

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function calculateWinner(squares) {
    const winner = winningPatterns.filter( (i) => {const [a, b, c] = i;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return true;
        }else {
            return null
        }
    });
    return winner;
}

export default GameBoard;