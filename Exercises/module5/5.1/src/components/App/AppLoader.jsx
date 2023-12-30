import { ProviderWrapper as VoteProviderWrapper } from "contexts/countersContext";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <VoteProviderWrapper>
        <App></App>
    </VoteProviderWrapper>
  )
}

export default AppLoader