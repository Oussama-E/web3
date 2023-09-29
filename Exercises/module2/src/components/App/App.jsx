import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import { useState } from 'react'

const App = () => {

  let value = JSON.parse(localStorage.getItem("counter"));
  const [ counter, setCounter ] = useState(value)
  console.log('rendering with counter value', counter)

  const changeCount = (delta) => {
    console.log('delta =', delta);
      if(delta>0){
         setCounter(counter + 1);
         localStorage.setItem("counter", JSON.stringify(counter+1));
      }
      else if(delta===0){
        setCounter(counter - counter);
        localStorage.setItem("counter", JSON.stringify(counter-counter));
      }
      else{
        setCounter(counter - 1);
        localStorage.setItem("counter", JSON.stringify(counter-1));
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