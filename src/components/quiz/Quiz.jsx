import React, { useContext, useEffect, useState } from "react";
import Main from '../main/Main';
import Logo from '../logo/Logo';
import Title from '../title/Title';
import Timer from '../timer/Timer';
import { TimerContext } from '../../context/TimerContext';
import { QuizContext } from '../../context/QuizContext';
import '../../App.css';

const Quiz = () => {

    const [counter, setCounter] = useContext(TimerContext);
    const [quiz, setQuizContext] = useContext(QuizContext);
    const [startClass, setStartClass] = useState(true);
    const [nextBtnClass, setNextBtnClass] = useState(false);
    const [resultsBtnClass, setResultsBtnClass] = useState(false);
    const [welcomeClass, setWelcomeClass] = useState(true);

    useEffect(() => {
        if (quiz.isStarted) {
            const timer = counter.seconds > 0 && setInterval(() => setCounter({seconds: counter.seconds - 1, isActive: true}), 1000);
            console.log(counter.seconds);
            if (counter.seconds === 0) {
                alert("Time's Up!")
                setCounter({seconds: 0, isActive: false});
                setQuizContext({isStarted: false})
                console.log(counter);
            };
            return () => 
                clearTimeout(timer);
        }
    }, [counter.seconds, counter.isActive]);

    function startGame (e) {
        e.preventDefault();
        setQuizContext({isStarted: true})
        console.log(quiz.isStarted);
        setCounter({seconds: 5, isActive: true});
        console.log(counter.isStarted);
        setStartClass(!startClass);
        setWelcomeClass(!welcomeClass);
    }



    return ( 
        <div className="App">
            <Main 
                welcomeClass={welcomeClass}
                startClass={startClass}
                startGame={startGame}
                resultsBtnClass={resultsBtnClass}
            />  
            <Logo />
            <Title />
            <Timer 
                timer={counter}
            />
        </div>
     );
}

export default Quiz;
