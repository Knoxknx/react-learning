import confetti from 'canvas-confetti'
import { useState } from 'react'
import Board from './components/Board'
import TurnSymbol from './components/TurnSymbol'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants/constants'
import { checkEndGame, checkWinner } from './logics/board'
import { resetGameStorage, saveGameToStorage } from './constants/storage'


function App() {

  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Juego del gato</h1>
      <button onClick={handleResetGame}> Reiniciar partida </button>

      <Board board={board} updateBoard={updateBoard} />

      <TurnSymbol turn={turn} />

      <WinnerModal handleResetGame={handleResetGame} winner={winner} />

    </main>
  )
}

export default App
