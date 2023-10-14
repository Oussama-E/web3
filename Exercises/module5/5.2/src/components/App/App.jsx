import VoteButton from 'components/VoteButton/VoteButton'
import './App.css'
import { useContext, useState } from 'react'
import { Context as VotesContext } from 'contexts/VotesContexts'

const App = () => {
  const [newOpinion, setNewOpinion] = useState('')
  const { opinions, setOpinions, increaseVote } = useContext(VotesContext)

  const addOpinion = (e) => {
    e.preventDefault();
    const opinionObject = {
      id: opinions.length + 1,
      text: newOpinion,
      score : 1
    }
    setNewOpinion('');
    setOpinions(opinions.concat(opinionObject))
  }
  const handleOpinionChange = (event) => {
    console.log(event.target.value)
    setNewOpinion(event.target.value)
  }
  const handleVote = (opinionId) => {
    increaseVote(opinionId); 
  }

  return (
      <div>
        <form onSubmit={addOpinion}>
        <div>
          add an opinion: <input 
                            value={newOpinion} 
                            onChange={handleOpinionChange} 
                          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Opinions</h2>
        <ul>
          {opinions.map(opinion => 
            <p key={opinion.id}>{opinion.text} <VoteButton increaseVote={() => handleVote(opinion.id)}/> {opinion.score}</p>)
            }
        </ul>
    </div> 
  )
}

export default App
