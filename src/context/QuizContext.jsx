import React, { useState, createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = props => {

    const [quiz, setQuizContext] = useState(
        {
            isStarted: false
        }
    );

    return ( 
        <QuizContext.Provider value={[quiz, setQuizContext]}>
            {props.children}
        </QuizContext.Provider>
     );

}