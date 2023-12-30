import { useState } from 'react'
import Button from '../Button/Button'
import Statistics from '../Statistics/Statistics'
import Loading from '../Loading/Loading'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)
  const timeout = setTimeout(()=> setLoading(false), 3000)

  

  const handleClick = (e) => {
    clearTimeout(timeout)
    console.log('value now =', e.target.className)
    if (e.target.className === 'good'){
      setGood(good+1)
      console.log('good => ', good+1)
    }
    else if (e.target.className === 'neutral'){
      setNeutral(neutral+1)
      console.log('neutral => ', neutral+1)
    }
    else{
      setBad(bad+1)
      console.log('bad => ', bad+1)
    }
  }

  return (
    <div>
      {loading ? (
        <Loading text={'Loading...'}/>
        ) : (
          <div>
            <h1>give feedback</h1>

            <Button handleClick={handleClick} text='good'/>
            <Button handleClick={handleClick} text='neutral'/>
            <Button handleClick={handleClick} text='bad'/>

            <h1>statistics</h1>

            <Statistics goodValue={good} neutralValue={neutral} badValue={bad}/>
          </div>
        )}
    </div>
  )
}

export default App