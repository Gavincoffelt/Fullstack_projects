const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )

}
const Content = (props) => {
  return (
    <div>
      <Part_1 s={props.s1} n={props.n1}/>
      <Part_2 s={props.s2} n={props.n2}/>
      <Part_3 s={props.s3} n={props.n3}/>

    </div>

)
  
}
const Total = (nums) => {
return(
  <p>Number of exercises {nums.e1 + nums.e2 + nums.e3}</p>
)
  
}
const Part_1 = (exercises) => {
  return(
  <p>{exercises.s} {exercises.n}</p>
  )
}
const Part_2 = (exercises) => {
  return(
  <p>{exercises.s} {exercises.n}</p>
  )
}
const Part_3 = (exercises) => {
  return(
  <p>{exercises.s} {exercises.n}</p>
  )
}
const App = () => {

    const course = {
      name: 'Half Stack application development',
     parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name}/>
      <Content s1={course.parts[0].name} n1={course.parts[0].exercises} s2={course.parts[1].name} n2={course.parts[1].exercises} s3={course.parts[2].name} n3={course.parts[2].exercises} />
      <Total e1 ={course.parts[0].exercises} e2 ={course.parts[1].exercises} e3 ={course.parts[2].exercises} />

    </div>
  )
}


export default App
