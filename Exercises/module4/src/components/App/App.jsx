import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    console.log('effect');
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }
  useEffect(hook, [])

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addContact = (e) => {
    e.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    let exist;
    persons.forEach((person) => {
      if(JSON.stringify(person.name) === JSON.stringify(personObject.name)){
        console.log(person.name);
        exist = true
        alert(`${person.name} is already added to phonebook`)
      }
     })

     if(!exist){
      setPersons(persons.concat(personObject))
      setNewName('')
     }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleContactChange} 
                />
        </div>
        <div>
          number: <input 
                    value={newNumber} 
                    onChange={handleNumberChange} 
                  />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person => 
            <p key={person.name}>{person.name}: {person.number}</p>)
            }
        </ul>
    </div>
  )
}

export default App