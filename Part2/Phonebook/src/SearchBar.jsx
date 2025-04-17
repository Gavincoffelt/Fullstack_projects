const SearchBar = ({persons,Search,doDelete,setPersons}) => {
    const filtered = persons.filter(person =>
     person.name.toLowerCase().includes(Search.toLowerCase()))
    
    return (
      <ul>
      {filtered.map(person =>(
        <li key={person.id}>
          {person.name}: {person.number}
          <button onClick={() => {
            if(window.confirm(`Are you sure you want to delete ${person.name} ?`)) {
              console.log(typeof person.id, person.id)
              doDelete(person.id,setPersons)} }}>Remove</button>
        </li>
      ))}
    </ul>
      )
    

  }
  export default SearchBar