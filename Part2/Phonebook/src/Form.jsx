import HandleInput from "./HandleInput"
const Form  = ({newName,setNewName,newNum,setNewNum,addName}) => 
<form onSubmit={addName}>
<div>
  Name: <input
  value={newName}
  onChange={HandleInput(setNewName)} />
</div>
<div>
  Number: <input
  value={newNum}
  onChange={HandleInput(setNewNum)} />
  
</div>
<div>
  <button type="submit">Add</button>
</div>
</form>
export default Form