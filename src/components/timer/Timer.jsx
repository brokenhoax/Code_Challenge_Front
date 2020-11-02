import React, { useContext, useEffect } from "react";
import styles from "./Timer.module.css";
import { TimerContext } from '../../context/TimerContext';
import { QuizContext } from '../../context/QuizContext';

export const Timer = props => {
    const [counter, setCounter] = useContext(TimerContext);
    const [quiz, setQuizContext] = useContext(QuizContext);
    

    useEffect(() => {
        if (quiz.isStarted) {
            console.log("Is Quiz Started?: " + quiz.isStarted);
            const timer = counter.seconds >= 1 && setInterval(() => setCounter({seconds: counter.seconds - 1, isActive: true}), 1000);
            console.log("Is Timer Active?: " + counter.isActive);
            console.log(counter.seconds);
            if (counter.seconds < 1) {
                setQuizContext({isStarted: false, isFinished: true, number: 0, score: 0, correctAnswer: true,  questions: {}});
                setCounter({seconds: '', isActive: false});
                console.log("Is Quiz Started?: " + quiz.isStarted);
                console.log("Is Timer Active?: " + counter.isActive);
                console.log(counter.seconds);
                showScoreboard();
            };
            return () => 
                clearTimeout(timer);
        }
    }, [counter.seconds, counter.isActive, quiz.isStarted, setQuizContext]);


    const showScoreboard = () => {
        setCounter({seconds: 5, isActive: false});
        setQuizContext({isStarted: false, isFinished: true, number: 0, score: quiz.score, correctAnswer: true,  questions: quiz.questions});
    }


    return ( 
            <div 
                className={`${counter.isActive}` ? `${styles.timer}` : `${styles.hide}`}>
                {counter.seconds}
            </div>
     );
}

export default Timer;