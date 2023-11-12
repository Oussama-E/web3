const ViewOneAnecdote = ({ anecdote }) => {
    return (
      <div>
        <h2><strong>{`${anecdote.content} by ${anecdote.author}`}</strong></h2>
        <p>has {anecdote.votes} vote(s)</p>
        for more info see <a href={`${anecdote.info}`}>{anecdote.info}</a>
      </div>
    )
  }
  export default ViewOneAnecdote