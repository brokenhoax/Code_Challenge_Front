import React, { useContext } from "react";
import { QuizContext } from '../../context/QuizContext';
import "../../styles/app.css";

const Main = props => {

    const [quiz] = useContext(QuizContext);

    // Handle Message To User When Quiz Finished

    const handleMessage = () => {
        if (quiz.score <= 60) {
            return ("¯¯\\_(ツ)_/¯¯")
        };
        if (quiz.score >= 70 && quiz.score < 100 ) {
            return ("Great job!")
        };
        if (quiz.score >= 100) {
            return ("Super Hero Like!!!")
        };
    }

    // Show Instructions

    if (!quiz.isStarted && !quiz.isFinished) {
        return (
            <div className="main flex justify-center items-center">
                <div className="antialiased sm:w-2/3 lg:w-1/2">
                    <h1 dataclassName="antialiased text-center my-4 sm:text-xl text-2xl">Welcome to Quizzy!</h1>
                    <h2 className="sm:text-lg text-xl my-4">What is Quizzy?</h2>
                    <hr></hr>
                    <h3 className="sm:text-md my-4 leading-7">Quizzy is a simple quiz app built using React. Quizzy allows users to track their score as they work through the provided questions. Answers are provided in multiple-choice format and correct answers are provided when answered incorrectly. The pressure is on with the addition of a 35-second timer! And the stakes are high with point deductions for every incorrect answer.</h3>

                    <h2 className="my-4 text-xl">How to Play</h2>
                    <ul className="sm:text-sm my-4 leading-7">
                        <li>You will have 35 seconds to complete the quiz.</li>
                        <li>A countdown timer (top-right) will help you keep track.</li>
                        <li>You will earn 10 points for every question you answer correctly.</li>
                        <li>You will lose 10 points for every question you get wrong.</li>

                    </ul>
                    <hr></hr>
                    <p className="my-4">Challenge: Score Over 100 Points!</p>
                    <hr></hr>
                    <div className="flex justify-center p-4">
                        <button data-cy="play" className="btn" onClick={(e) => {props.startGame(e)}}>Play</button>
                    </div>
                </div>
            </div>
        );
    }

    // Show Quiz

    if (!quiz.isFinished) {
        return (
            <div className="main flex justify-center items-center">
                <div className="mx-64">
                    <div className="text-6xl text-center pb-4">
                        {props.question}
                    </div>
                    <div className="grid grid-cols-2">
                        <button data-cy="answer-a" className="btn m-4 px-16 py-12 text-4xl" value={props.answerOne} onClick={(e) => {props.handleAnswer(e)}}>{props.answerOne}</button>
                        <button data-cy="answer-b" className="btn m-4 px-16 py-12 text-4xl" value={props.answerTwo} onClick={(e) => {props.handleAnswer(e)}}>{props.answerTwo}</button>
                        <button data-cy="answer-c" className="btn m-4 px-16 py-12 text-4xl" value={props.answerThree} onClick={(e) => {props.handleAnswer(e)}}>{props.answerThree}</button>
                        <button data-cy="answer-d" className="btn m-4 px-16 py-12 text-4xl" value={props.answerFour} onClick={(e) => {props.handleAnswer(e)}}>{props.answerFour}</button>
                    </div>
                </div>
            </div>
        );
    }

    // Show Scoreboard

    if (quiz.isFinished) {

        return (
            <div className="main flex justify-center items-center">
                <div className="text-center m-8"> 
                    <div className="text-6xl m-8">
                        <h1>{handleMessage()}</h1>
                        <p>{quiz.score}</p>
                        <h1>Points</h1>
                    </div>
                    <div className="flex justify-center">
                        <button data-cy="home" className="btn m-4" onClick={(e) => {props.goHome(e)}}>Home</button>
                        <button data-cy="restart" className="btn m-4" onClick={(e) => {props.startGame(e)}}>Restart</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;