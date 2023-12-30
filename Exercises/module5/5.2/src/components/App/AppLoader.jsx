import { ProviderWrapper as VoteProvider } from "contexts/VotesContext";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <VoteProvider >
        <App/>
      </VoteProvider >
  )
}

export default AppLoader