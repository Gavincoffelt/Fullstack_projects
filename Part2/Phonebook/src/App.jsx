import { useState,useEffect } from 'react'
import personService from './Services/Functions'
import Notification from './Message'
import HandleInput from './HandleInput'
import SearchBar from './SearchBar'
import Form from './Form'


const handleDelete =(id,setPersons) => {
personService.remove(id)
.then(() =>
  setPersons(upd => upd.filter(person => person.id !== id))
)
}
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [Search, setSearch] = useState('')
  const [Message, setMessage] = useState(null)

  useEffect(() => {

    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName =  (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNum
      
    }
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already registered!`);
      return;
    }    
    setMessage(`${newName} Has Been Added to the Phonebook!`)
    personService.create(nameObj)
    .then(newPerson => {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNum('')
    })
    setTimeout(() => {
      setMessage(null)
    }, 5000)

  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={Message}/>
       Search:<input
       value={Search}
       onChange={HandleInput(setSearch)}/>
      <h2>Add a New Person</h2>
      <Form
        addName={addName}
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}/>
      <h2>Numbers</h2>
      <SearchBar persons={persons} Search = {Search} doDelete={handleDelete} setPersons={setPersons} />
    </div>
  )
}

export default App