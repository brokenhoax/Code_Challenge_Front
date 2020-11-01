import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from '../../context/QuizContext';
import Questions from '../../db/QuizData';
import '../../App.css';



const Hello = () => {
    const [quiz, setQuizContext] = useContext(QuizContext);
    const [welcome, setWelcomeState] = useState(true);
    const [startClass, setStartClass] = useState(true);
    const [nextBtnClass, setNextBtnClass] = useState(false);
    const [resultsBtnClass, setResultsBtnClass] = useState(false);
    const [welcomeClass, setWelcomeClass] = useState(true);


    // useEffect(() => {
    //     console.log(quiz.questions);
    //     const obj = JSON.parse(quiz.questions);
    // }, [quiz.isStarted]);

    const test = () => {
        const firstObject = Object.values(quiz.questions)[quiz.number];
        console.log(firstObject);
    }


    return ( 
        <div>
            <h1>Hello There</h1>
            <h2>{test()}</h2>
            {quiz.questions.map((question, index)=>{
                return <h1>{question.question}</h1>
            })}
        </div>
    )

}

export default Hello;
