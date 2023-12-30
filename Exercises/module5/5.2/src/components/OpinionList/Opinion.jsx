import VoteButton from "components/VoteButton/VoteButton";


const Opinion = ({ opinion }) => {

    return(
        <p>{opinion.text} <VoteButton opinion={opinion} /> {opinion.score}</p>
    )
}

export default Opinion