import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import { useState } from 'react'

const App = () => {

  let value = JSON.parse(localStorage.getItem("counter"));
  const [ counter, setCounter ] = useState(value)
  console.log('rendering with counter value', counter)

  const changeCount = (delta) => {
    console.log('value before', counter);
    console.log('delta =', delta);
    const newCount = counter+delta;
    setCounter(newCount);
    localStorage.setItem("counter", JSON.stringify(newCount));
  }

  return (
    <div>
      <Display counter = {counter} />
      <Button
        changeCount={changeCount}
        delta={1}
        text='plus'
      />
      <Button
        changeCount={changeCount}
        delta={-counter}
        text='zero'
      />     
      <Button
        changeCount={changeCount}
        delta={-1}
        text='minus'
      />           
    </div>
  )
}

export default App