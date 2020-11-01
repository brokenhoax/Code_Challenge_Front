import React, { useState, createContext } from "react";

export const TimerContext = createContext();

export const TimerProvider = props => {

    const [counter, setCounterContext] = useState(
        {
            seconds: 40,
            isActive: false
        }
    );

    return ( 
        <TimerContext.Provider value={[counter, setCounterContext]}>
            {props.children}
        </TimerContext.Provider>
     );

}