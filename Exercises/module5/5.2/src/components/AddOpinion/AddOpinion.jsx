import { useContext, useState } from "react";
import { Context as VotesContext } from "contexts/VotesContext";

const AddOpinion = () => {
  const [newOpinion, setNewOpinion] = useState("");
  const { addOpinion } = useContext(VotesContext);

  const handleOnChange = (e) => { setNewOpinion(e.target.value) }

  const handleOpinionChange = (event) => {
    event.preventDefault()
    addOpinion(newOpinion)
    setNewOpinion('');
  };


  return (
    <div>
      <form onSubmit={handleOpinionChange}>
        <div>
          add an opinion:{" "}
          <input value={newOpinion} onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddOpinion