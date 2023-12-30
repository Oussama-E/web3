import React, { useState } from "react";

const Context = React.createContext(null)

const ProviderWrapper = ({children}) => {
    const [opinions, setOpinions] = useState([]);
    const sortedOpinions = [...opinions].sort((a, b) => b.score - a.score);
    const increaseVote = (opinionId) => {
        setOpinions((prevOpinions) =>
            prevOpinions.map((opinion) =>
                opinion.id === opinionId
                    ? { ...opinion, score: opinion.score + 1 }
                    : opinion
            )
        )
    }   

    const addOpinion = (opinion) => {
        const opinionObject = {
        id: opinions.length + 1,
        text: opinion,
        score : 1
        }
        setOpinions(opinions.concat(opinionObject))
    }
    
    const exposedValue = {
        sortedOpinions,
        increaseVote,
        addOpinion
    }

    return <Context.Provider value={exposedValue}>
        { children }
    </Context.Provider>   
}

export {    
    Context,
    ProviderWrapper,    
}
