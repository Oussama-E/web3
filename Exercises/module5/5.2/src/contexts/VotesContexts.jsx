import React, { useState } from "react";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [opinions, setOpinions] = useState([]);
    const increaseVote = (opinionId) => {
        setOpinions((prevOpinions) =>
            prevOpinions.map((opinion) =>
                opinion.id === opinionId
                    ? { ...opinion, score: opinion.score + 1 }
                    : opinion
            )
        )
    }   
    
    const exposedValue = {
        opinions,
        setOpinions,
        increaseVote,
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>   
}

export {    
    Context,
    ProviderWrapper,    
}
