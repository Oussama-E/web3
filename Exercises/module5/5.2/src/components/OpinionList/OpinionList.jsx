import { useContext } from "react";
import { Context as VotesContext } from "contexts/VotesContext";
import Opinion from "./Opinion";

const OpinionList = () => {
  const { sortedOpinions } = useContext(VotesContext)

  return (
    <div>
      <h2>Opinions</h2>
      <ul>
        {sortedOpinions.map((opinion) => (
          <Opinion key={opinion.id} opinion={opinion}/>
        ))
        }
      </ul>
    </div>
  )
}

export default OpinionList
