import React from 'react'
import useCatImage from './hooks/useCatImage'
import useRandomFact from './hooks/useRandomFact'
import './styles/styles.css'

export function App() {

  const { fact, refreshFact } = useRandomFact()
  const { imageUrl } = useCatImage({ fact })

  const handleGetNewFact = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleGetNewFact}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}
      </section>
    </main>
  )
}

export default App