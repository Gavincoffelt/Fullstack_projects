import { useState } from 'react'

const Stats = (props) => {
  if(props.total === 0) return <p>No Feedback Given</p>
 return (
  <div>
   <Display title="Good: " counter ={props.good}/>
   <Display title="Neutral: " counter={props.neutral}/>
   <Display title="Bad: " counter={props.bad}/>
   <Display title="average: "counter = {(((props.good-props.bad)/props.total)+1)/2}/>
   <Display title="Positive: %" counter={((props.good)/props.total) *100}/>
  </div>
 )

}


  const Display = (props) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>{props.title}</td>
            <td>{props.counter}</td>
          </tr>
        </tbody>
      </table>
    )
  } 
   const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
   )
    
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Total = good + neutral + bad;
  return (
    <div>
      <h1>Provide Feedback</h1>
      <Button onClick={() => setGood(good +1)} text='Good'/>
      <Button onClick={() => setNeutral(neutral +1)} text='Neutral'/>
      <Button onClick={() => setBad(bad +1)} text='Bad'/>
      <h1>Statistics:</h1>      
      <Stats good={good} neutral={neutral} bad={bad} total = {Total}/>

      
      </div>
  )
}

export default App