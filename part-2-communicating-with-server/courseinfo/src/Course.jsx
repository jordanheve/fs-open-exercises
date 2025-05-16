import Header from './components/Header'
import Content from './components/Content'
import  Total from './components/Total'
import Title from './components/Title'

const Course = ({courses}) => {
  return (
    <div>
      <Header course="Web development curriculum" />
      {courses.map((course) => (
        <div key={course.id}>
          <Title title={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />  
        </div>
      ))}
    </div>
  )
}

export default Course
