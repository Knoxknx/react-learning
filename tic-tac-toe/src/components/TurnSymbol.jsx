import React from 'react'
import Square from './Square'
import { TURNS } from '../constants/constants'

const TurnSymbol = ({ turn }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X} >
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  )
}

export default TurnSymbol