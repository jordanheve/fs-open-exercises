import StatisticsLine from "./StatisticsLine";

export default function Statistics({clicks}) {
  return (
    <div>
      <h2>statistics</h2>
      {clicks.good + clicks.neutral + clicks.bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticsLine text="good" value={clicks.good} />
            <StatisticsLine text="neutral" value={clicks.neutral} />
            <StatisticsLine text="bad" value={clicks.bad} />
            <StatisticsLine text="all" value={clicks.good + clicks.neutral + clicks.bad} />
            <StatisticsLine text="average" value={(clicks.good - clicks.bad) / (clicks.good + clicks.neutral + clicks.bad)} />
            <StatisticsLine text="positive" value={(clicks.good / (clicks.good + clicks.neutral + clicks.bad)) * 100} />
          </tbody>
        </table>
      )}
    </div>
  )
}
