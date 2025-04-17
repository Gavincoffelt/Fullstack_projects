import Total from './Total'
const Course = ({cour}) => {
    return (
      <div>
        <h1>{cour.name}</h1>
        <ul>
          {cour.parts.map(parts =>(
             <li key={cour.id}> 
              {parts.name} {parts.exercises}
            </li>
          ))}
        </ul>
          <Total cours ={cour.parts} />
  
      </div>
      
    )
}
export default Course