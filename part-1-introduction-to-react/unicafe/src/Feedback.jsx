import Button from "./Button";

export default function Feedback({ setClicks }) {
  
  const handleGood = () => setClicks((prev) => ({ ...prev, good: prev.good + 1 }))

  const handleNeutral = () => setClicks((prev) => ({ ...prev, neutral: prev.neutral + 1 }))
  
  const handleBad = () => setClicks((prev) => ({ ...prev, bad: prev.bad + 1 }))
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
    </div>
  )
}
