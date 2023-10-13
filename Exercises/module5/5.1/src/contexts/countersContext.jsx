import React, { useState } from "react";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [ good, setGood ] = useState(0)
    const [ ok, setOk ] = useState(0)
    const [ bad, setBad ] = useState(0)
    const increaseGood = () => {
        console.log("value before increase = ", good)
        const newValue = good + 1;
        setGood(newValue)
    }
    const increaseOk = () => {
        console.log("value before increase = ", ok)
        const newValue = ok + 1;
        setOk(newValue)
    }
    const increaseBad = () => {
        console.log("value before increase = ", bad)
        const newValue = bad + 1;
        setBad(newValue)
    }
    const resetAll = () => {
        setGood(0)
        setOk(0)
        setBad(0)
    }

    const exposedValue = {
        good,
        increaseGood,
        ok,
        increaseOk,
        bad,
        increaseBad,
        resetAll
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>   
}

export {    
    Context,
    ProviderWrapper,    
}
