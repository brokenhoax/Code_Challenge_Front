import React, { useContext, useEffect } from "react";
import { TimerContext } from '../../context/TimerContext';
import { QuizContext } from '../../context/QuizContext';
import '../../styles/app.css';

export const Timer = props => {
    
    const [counter, setCounter] = useContext(TimerContext);
    const [quiz, setQuizContext] = useContext(QuizContext);
    

    // Handle Timer 

    useEffect(() => {
        
        // Reset Timer When Quiz Finished 

        if (quiz.isFinished) {
            setCounter({seconds: 35, isActive: true});
        }

        // Set Timer When Quiz Starts

        if (quiz.isStarted && !quiz.isFinished) {

            // Set the Timer

            const timer = counter.seconds >= 1 && setInterval(() => setCounter({seconds: counter.seconds - 1, isActive: true}), 1000);
            console.log(counter.seconds);

        if (counter.seconds < 1) {

            // Reset the Timer If Time Runs Out
            // Show Scoreboard by Setting Counter and Quiz Context

            setQuizContext({isStarted: false, isFinished: true, number: 0, score: 0, correctAnswer: true,  questions: quiz.questions});
            setCounter({seconds: '', isActive: false});

            function showScoreboard() {
                
                setCounter({seconds: 35, isActive: false});
                setQuizContext({isStarted: false, isFinished: true, number: 0, score: quiz.score, correctAnswer: true,  questions: quiz.questions});
            }
            showScoreboard();
        };
        return () => 
            clearTimeout(timer);
        }
    }, [setQuizContext, quiz.questions, quiz.score, quiz.isStarted, setCounter, counter.seconds, counter.isActive, quiz.isFinished, quiz.number]);

    return ( 
            <div className="timer font-body flex justify-end items-center pr-4 text-5xl">
                {/* className={`${counter.isActive}` ? `${styles.timer}` : `${styles.hide}`} */}
                <div data-cy="time-check" className={!quiz.isStarted ? `` : `animate-pulse`}>{counter.seconds}</div>
            </div>
     );
}

export default Timer;