import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const changeCount = (delta) => {
    console.log('delta =', delta);
      if(delta>0){
         setCounter(counter + 1);
      }
      else if(delta===0){
        setCounter(counter - counter);
      }
      else{
        setCounter(counter - 1);
      }
  }

  const handleClick = (e) => {
    console.log('value before', counter);
    const delta = parseInt(e.target.dataset.delta);
    changeCount(delta);
  }

  return (
    <div>
      <Display counter = {counter} />
      <Button
        handleClick={handleClick}
        delta={1}
        text='plus'
      />
      <Button
        handleClick={handleClick}
        delta={0}
        text='zero'
      />     
      <Button
        handleClick={handleClick}
        delta={-1}
        text='minus'
      />           
    </div>
  )
}

export default App