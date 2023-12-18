import React from 'react'
import useRandomFact from '../hooks/useRandomFact'

const ButtonFact = () => {

  const { fact, refreshFact } = useRandomFact()

  const handleGetNewFact = async () => {
    refreshFact()
  }

  return (
    <button onClick={handleGetNewFact}>Get new fact</button>
  )
}

export default ButtonFact