import { useState } from 'react'
import Button from '../Button/Button'
import Statistics from '../Statistics/Statistics'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClick = (value) => {
    console.log('value now =', value)
    let newGood=good, newNeutral=neutral, newBad=bad, newAll=all, newScore=score, newPositive=positive, newTotal = total
    setTotal(1)
    if(value==='good'){
      newGood+=1
      newScore+=1
      setGood(newGood)
      setScore(newScore)
      console.log('good => ', newGood)
    }
    else if(value==='neutral'){
      newNeutral+=1
      newScore+=0
      setNeutral(newNeutral)
      setScore(newScore)
      console.log('neutral => ', newNeutral)
    }
    else{
      newBad+=1
      newScore-=1
      setBad(newBad)
      setScore(newScore)
      console.log('bad => ', newBad)
    }
    newAll+=1
    setAll(newAll)
    
    newPositive = (newGood/newAll) * 100
    setPositive(newPositive)
    
    setAverage(newScore/newAll)
  }

  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={()=> handleClick('good')} text={'good'}/>
        <Button handleClick={()=> handleClick('neutral')} text={'neutral'}/>
        <Button handleClick={()=> handleClick('bad')} text={'bad'}/>
      <h1>statistics</h1>
      
      {total > 0 ? (
        <div>
          
            <Statistics goodValue={good} neutralValue={neutral} badValue={bad} 
              allValue={all} averageValue={average} positiveValue={positive + '%'}
              />
        </div>
        ) : (
          <div>
            <p>No feedback given</p>
          </div>
        )
        
      }
      
    </div>
  )
}

export default App