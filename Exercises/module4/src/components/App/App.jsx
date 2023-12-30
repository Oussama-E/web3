import { useState, useEffect } from 'react'
import personService from '../../services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')
  const [condition, setCondition] = useState(false)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect( () => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

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
      personService
      .create(personObject)
      .then(returnedPerson =>{
        setPersons(persons.concat(returnedPerson))
      })
      setNewName('')
     }
    
  }

  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value)
    setCondition(true)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>Filter 
        <input 
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <h3>Add a contact</h3>
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
      <h3>Numbers</h3>
      {condition ? 
      (
      <ul>
        {persons
        .filter(person => 
          person.name.toLowerCase().startsWith(filter.toLowerCase()))
        .map(person=>
          <p key={person.name}>{person.name}: {person.number}</p>
        )}
      </ul>
      ) 
      : 
      (
      <ul>
          {persons.map(person => 
            <p key={person.name}>{person.name}: {person.number}</p>
          )}
      </ul>
      )}
    </div>
  )
}

export default App