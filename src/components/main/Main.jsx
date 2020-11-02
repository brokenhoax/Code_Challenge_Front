import React, { useContext } from "react";
import { QuizContext } from '../../context/QuizContext';
import styles from "./Main.module.css";

const Main = props => {

    const [quiz, setQuizContext] = useContext(QuizContext);

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
    
    //Show Instructions
    if (!quiz.isStarted && !quiz.isFinished) {
        return (
            <div className={styles.main}>
                <div className={styles.welcomeContainer}>
                    <h1 className={styles.welcomeHeader}>Welcome to Quizzy!</h1>
                        <h2>How To Play:</h2>
                        <h3 className={styles.text}>Quizzy is a simple quiz app built using the MERN stack. Quizzy allows users to track their score as they work through the provided questions. Answers are provided in multiple-choice format and correct answers are provided when answered incorrectly. The pressure is on with the addition of a 35-second timer! And the stakes are high with point deductions for every incorrect answer.</h3>
                            <ul>
                                <li>You will have 35 seconds to complete the quiz.</li>
                                <li>A countdown timer (top-right) will help you keep track.</li>
                                <li>You will earn 10 points for every question you answer correctly.</li>
                                <li>You will lose 10 points for every question you get wrong.</li>

                            </ul>
                        <p>Can you break 100 and be "super-hero like"?&nbsp;&nbsp;&nbsp;&nbsp;--Try if you dare!</p>
                        <button className={styles.nav} onClick={(e) => {props.startGame(e)}}>Play</button>
                </div>
            </div>
        );
    }

    //Show Quiz
    if (!quiz.isFinished) {
        return (
            <div className={props.correctAnswer ? `${styles.mainCorrect}` : `${styles.mainIncorrect}`}>
                <div className={styles.quizContainer}>
                    <div className={styles.question}>
                        {props.question}
                    </div>
                    <div className={styles.one}>
                        <button className={styles.btn} value={props.answerOne} onClick={(e) => {props.handleAnswer(e)}}>{props.answerOne}</button>
                    </div>
                    <div className={styles.two}>
                        <button className={styles.btn} value={props.answerTwo} onClick={(e) => {props.handleAnswer(e)}}>{props.answerTwo}</button>
                    </div>
                    <div className={styles.three}>
                        <button className={styles.btn} value={props.answerThree} onClick={(e) => {props.handleAnswer(e)}}>{props.answerThree}</button>
                    </div>
                    <div className={styles.four}>
                        <button className={styles.btn} value={props.answerFour} onClick={(e) => {props.handleAnswer(e)}}>{props.answerFour}</button>
                    </div>
                </div>
            </div>
        );
    }

    //Show Scoreboard
    if (quiz.isFinished) {

        return (
            <div className={styles.main}>
                <div className={styles.scoreboard}>
                    <h1 className={styles.scoreboardHeader}>{handleMessage()}</h1>
                    <p className={styles.score}>{quiz.score}</p>
                    <h1 className={styles.message}>Points</h1>
                    <div className={styles.navBtns}>
                        <button className={styles.nav} onClick={(e) => {props.goHome(e)}}>Home</button>
                        <button className={styles.nav} onClick={(e) => {props.startGame(e)}}>Restart</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;