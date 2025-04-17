const Total = ({cours}) => {
    const texercises = cours.reduce((accu, curr) => accu + curr.exercises, 0)
    return (
      <b>Total number of exercises: {texercises}</b>
    )
  }
export default Total