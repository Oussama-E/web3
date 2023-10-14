import React, { useState } from "react";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [ vote, setVote ] = useState(1)
    const increaseVote = (v) => {
        console.log("value before increase = ", vote)
        const newValue = vote + 1;
        setVote(newValue)
    }
    
    const exposedValue = {
        vote,
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
