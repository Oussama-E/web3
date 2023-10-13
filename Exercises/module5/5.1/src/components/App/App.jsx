import { useContext } from 'react'
import './App.css'
import GoodButton from 'components/GoodButton/GoodButton'
import { Context as CountersContext } from 'contexts/countersContext'
import OkButton from 'components/OkButton/OkButton'
import BadButton from 'components/BadButton/BadButton'
import ResetButton from 'components/ResetButton/ResetButton'

const App = () =>  {
  const { good, increaseGood } = useContext(CountersContext)
  const { ok, increaseOk } = useContext(CountersContext)
  const { bad, increaseBad } = useContext(CountersContext)
  const { resetAll } = useContext(CountersContext)
  

  return (
    <>
       <GoodButton good={good} increaseGood={increaseGood}/>
       <OkButton ok={ok} increaseOk={increaseOk}/>
       <BadButton bad={bad} increaseBad={increaseBad}/>
       <ResetButton resetAll={resetAll}/>
    </>
  )
}

export default App
