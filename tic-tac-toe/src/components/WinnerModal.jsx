import React from 'react'
import Square from './Square'

export const WinnerModal = ({ winner, handleResetGame }) => {

  if (winner === null) return null

  const winnerText = winner ? 'Ganaste' : 'Empate'

  return (
    <section className="winner">
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {
            winner && <Square>{winner}</Square>
          }
        </header>

        <footer>
          <button onClick={handleResetGame}>Reiniciar partida </button>
        </footer>

      </div>

    </section>
  )
}
