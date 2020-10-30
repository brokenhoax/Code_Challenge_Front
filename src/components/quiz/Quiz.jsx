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
    const [welcome, setWelcomeState] = useState(true);
    const [startClass, setStartClass] = useState(true);
    const [nextBtnClass, setNextBtnClass] = useState(false);
    const [resultsBtnClass, setResultsBtnClass] = useState(false);
    const [welcomeClass, setWelcomeClass] = useState(true);




    useEffect(() => {
        if (quiz.isStarted) {
            console.log("Is Quiz Started?: " + quiz.isStarted);
            const timer = counter.seconds >= 1 && setInterval(() => setCounter({seconds: counter.seconds - 1, isActive: true}), 1000);
            console.log("Is Timer Active?: " + counter.isActive);
            console.log(counter.seconds);
            if (counter.seconds === 0) {
                setQuizContext({isStarted: false})
                setCounter({seconds: '', isActive: false});
                console.log("Is Quiz Started?: " + quiz.isStarted);
                console.log("Is Timer Active?: " + counter.isActive);
                console.log(counter.seconds);
                alert("Time's Up!")
            };
            return () => 
                clearTimeout(timer);
        }
    }, [counter.seconds, counter.isActive, quiz.isStarted]);

    // useEffect(() => {
    //     if (quiz.isStarted) {
    //         setWelcomeState(welcome = false)
    //         console.log("what is this!?!" + welcome)
    //     }
    // }, []);

    function startGame (e) {
        e.preventDefault();
        setQuizContext({isStarted: true})
        setCounter({seconds: 400, isActive: true});
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
