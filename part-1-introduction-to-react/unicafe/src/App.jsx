import { useState } from 'react'
import Button from './Button'
import Feedback from './Feedback'
import Statistics from './Statistics'

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  return (
    <div>
      <Feedback setClicks={setClicks} />
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App