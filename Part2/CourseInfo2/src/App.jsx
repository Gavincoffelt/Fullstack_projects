import Course from './components/Course'

  


const Total = ({cours}) => {
  const texercises = cours.reduce((accu, curr) => accu + curr.exercises, 0)
  return (
    <b>Total number of exercises: {texercises}</b>
  )
}
const App = () => {
  
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
    <div>
      <h1>Courses & Exercises</h1>
      <ul>
        {courses.map(courses => 
          <Course key={courses.id} cour={courses} />
          
        )}
      </ul>
    </div>
  )
}

export default App