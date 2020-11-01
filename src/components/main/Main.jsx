import React, { useState, useContext } from "react";
import { QuizContext } from '../../context/QuizContext';
import styles from "./Main.module.css";

const Main = props => {

    const [quiz, setQuizContext] = useContext(QuizContext);

    if (!quiz.isStarted) {
        return (
            <div className={styles.main}>
                <div className={styles.welcomeContainer}>
                    <div className={props.welcomeClass ? `${styles.welcome}` : `${styles.hide}`}>
                        <h1>Welcome to Quizzy!</h1>
                            <h2>How To Play:</h2>
                                <ul>
                                    <li>You will have 2 minutes to complete the quiz.</li>
                                    <li>A countdown timer (top-right) will help you keep track.</li>
                                    <li>You will earn 10 points for every question you answer correctly.</li>
                                    <li>You will earn 0 points for every question you get wrong.</li>
                                    <li>You will lose 10 seconds for every question you get wrong.</li>
                                </ul>
                            <p>Are you up to the challenge?!</p>
                        <h2>Click the "Ready" button below to begin... Good luck!</h2>
                    </div>
                    <div className={styles.controls}>
                        <button className={props.startClass ? `${styles.btn}`: `${styles.hide}`} onClick={(e) => {props.startGame(e)}}>Ready!</button>
                    </div>
                </div>
            </div>
        );
    }

    if (quiz.isStarted) {
        return (
            <div className={styles.main}>
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
                    <div className={styles.prev}>
                        <button className={styles.nextBtn}>Previous</button>
                    </div>
                    <div className={styles.next}>
                        <button className={styles.prevBtn} onClick={(e) => {props.showNextQuestion(e)}}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;