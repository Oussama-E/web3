import { useContext } from "react"
import { Context as VotesContext } from "contexts/VotesContext"

const VoteButton = ({opinion}) => {
    const {increaseVote} = useContext(VotesContext)

    return(
        <button onClick={() => increaseVote(opinion.id)}> Vote </button>
    )
}

export default VoteButton