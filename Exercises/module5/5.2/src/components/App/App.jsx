import "./App.css";
import AddOpinion from "components/AddOpinion/AddOpinion";
import OpinionList from "components/OpinionList/OpinionList";

const App = () => {
  return (
    <div>
      <OpinionList />
      <AddOpinion />
    </div>
  );
};

export default App;
