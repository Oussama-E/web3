import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const handleClick = (e) => {
    const delta = parseInt(e.target.dataset.delta);
    console.log('e =', e);
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

  const changeCount = (e) => {
    console.log('value before', counter);
    handleClick(e);
  }

  return (
    <div>
      <Display counter = {counter} />
      <Button
        delta={1}
        handleClick={changeCount}
        text='plus'
      />
      <Button
        delta={0}
        handleClick={changeCount}
        text='zero'
      />     
      <Button
        delta={-1}
        handleClick={changeCount}
        text='minus'
      />           
    </div>
  )
}

export default App