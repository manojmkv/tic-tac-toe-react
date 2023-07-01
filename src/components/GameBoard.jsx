import React from "react";
import Square from "./square";

const GameBoard = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [isX, setisX] = React.useState(true);
    const [isWinner, setIsWinner] = React.useState(false);
    //var isWinner = false;
    const handleClick = (i) => {
        squares[i] = isX ? 'X' : 'O';
        setSquares(squares);
        let win = calculateWinner(squares);
        let winner = win.length ? true : false;
        console.log("Winner ---> ", isWinner);
        setIsWinner(winner);
        setisX(!isX);
    }

    const handleRestart = () => {
        setisX(true);
        setSquares(Array(9).fill(null));
        setIsWinner(false);
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
                    <Square className="" value={squares[0]} onClick={() => (squares[0] === null && !isWinner) ? handleClick(0) : false}/>
                    <Square className="" value={squares[1]} onClick={() => (squares[1] === null && !isWinner) ? handleClick(1) : false}/>
                    <Square className="" value={squares[2]} onClick={() => (squares[2] === null && !isWinner) ? handleClick(2) : false}/>
                </div>
                <div className="board-row">
                    <Square className="" value={squares[3]} onClick={() => (squares[3] === null && !isWinner) ? handleClick(3) : false}/>
                    <Square className="" value={squares[4]} onClick={() => (squares[4] === null && !isWinner) ? handleClick(4) : false}/>
                    <Square className="" value={squares[5]} onClick={() => (squares[5] === null && !isWinner) ? handleClick(5) : false}/>
                </div>
                <div className="board-row">
                    <Square className="" value={squares[6]} onClick={() => (squares[6] === null && !isWinner) ? handleClick(6) : false}/>
                    <Square className="" value={squares[7]} onClick={() => (squares[7] === null && !isWinner) ? handleClick(7) : false}/>
                    <Square className="" value={squares[8]} onClick={() => (squares[8] === null && !isWinner) ? handleClick(8) : false}/>
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
            return squares[a];
        }else {
            return null
        }
    });
    return winner;
}

export default GameBoard;