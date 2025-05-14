import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"
const App = () => {

  const course = 'Half Stack application development'
  const content = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14,
  }
  
  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={content.exercises1 + content.exercises2 + content.exercises3} />
    </div>
  )
}

export default App
