import { useState } from "react"
import GameBorad from "./GameBoard"
import Players from "./Player"
import Log from "./Log";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from './winning-combination'

const PLAYERS = {
    X: 'Player1',
    O: 'Player2'
};
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function derivedActivePlayer(gameTurn) {
    let currentPlayer = 'X';
    if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}
function derivedGameBoard(gameTurn) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(x => [...x])];
    for (const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    return gameBoard
}
function derivedWinner(players, gameBoard) {
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstCombination = gameBoard[combination[0].row][combination[0].column];
        const secondCombination = gameBoard[combination[1].row][combination[1].column];
        const thirdCombination = gameBoard[combination[2].row][combination[2].column];
        if (firstCombination && firstCombination === secondCombination && firstCombination === thirdCombination) {
            winner = players[firstCombination];
        }
    }
    return winner;
}

export default function Gamecontainer() {
    const [players, setPlayers] = useState(PLAYERS)
    const [gameTurn, setGameTurn] = useState([]);
    const activePlayer = derivedActivePlayer(gameTurn);
    const gameBoard=derivedGameBoard(gameTurn);
    const winner = derivedWinner(players,gameBoard);
    const hasDraw = gameTurn.length === 9 && !winner;

    function handleSquareClick(rowIndex, colIndex) {
        setGameTurn((prevTurn) => {
            let currentPlayer = derivedActivePlayer(prevTurn);
            const updatedTurn = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurn
            ];
            return updatedTurn;
        });
    }
    function funRematch() {
        setGameTurn([]);
    }
    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prePlayer => {
            return {
                ...prePlayer,
                [symbol]: newName
            }
        });
    }

    return (
        <>
            <h1>Game Board</h1>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Players playerName='Player1'
                        symbol='X' isActive={activePlayer === 'X'}
                        onPlayerChange={handlePlayerNameChange} />

                    <Players playerName='Player2'
                        symbol='O' isActive={activePlayer === 'O'}
                        onPlayerChange={handlePlayerNameChange} />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onClickRematch={funRematch} />}
                <GameBorad onSelectSquare={handleSquareClick}
                    board={gameBoard} />
            </div>
            <Log turns={gameTurn} />
        </>
    )
}