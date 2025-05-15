import { useState } from 'react'
import Button from './Button'
import { INITIAL_ANECDOTES } from './utils/anecdotes'
import Anecdote from './Anecdote'
const App = () => {
  
  const [anecdotes, setAnecdotes] = useState(INITIAL_ANECDOTES)
  const [selected, setSelected] = useState(0)
  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }
  const handleVote = () => {
    const newAnecdotes = [...anecdotes]
    newAnecdotes[selected].vote += 1
    setAnecdotes(newAnecdotes)
  }
  const mostVoted = anecdotes.reduce((prev, current) => {
    return (prev.vote > current.vote) ? prev : current
  })
  return (
    <div>
      <Anecdote title="Anecdote of the day" text={anecdotes[selected].anecdote}/>
      <p>has {anecdotes[selected].vote} votes</p>
      <Button onClick={handleVote} text="vote"/>
      <Button onClick={handleNextAnecdote} text="Next anecdote"/>
      <Anecdote title="Anecdote with most votes" text={mostVoted.anecdote}/>
    </div>
  )
}

export default App