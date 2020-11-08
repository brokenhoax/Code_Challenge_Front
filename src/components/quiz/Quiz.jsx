import React, { useContext, useEffect, useState } from "react";
import Main from '../main/Main';
import Logo from '../logo/Logo';
import Title from '../title/Title';
import Timer from '../timer/Timer';
import Questions from '../../db/QuizData';
import { QuizContext } from '../../context/QuizContext';
import '../../App.css';

const Quiz = () => {
    
    const [quiz, setQuizContext] = useContext(QuizContext);
    const [welcome, setWelcomeState] = useState(true);
    const [startClass, setStartClass] = useState(true);
    const [nextBtnClass, setNextBtnClass] = useState(false);
    const [resultsBtnClass, setResultsBtnClass] = useState(false);
    const [welcomeClass, setWelcomeClass] = useState(true);
    const QuestionObj = Object.values(quiz.questions)[quiz.number];


    // Concatonate Answers Then Shuffle Them Using Fisher-Yates Algorithm

    const shuffleAnswers = () => {
        let answersArray = (QuestionObj.incorrect.concat(QuestionObj.correct));
        console.log(answersArray);
        for (let i = answersArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = answersArray[i];
            answersArray[i] = answersArray[j];
            answersArray[j] = temp;
            console.log(temp);
        }
        return answersArray;
    }

    // Store Answers in New Array For Use As Props In Render

    const shuffledAnswers = shuffleAnswers();


    // Start the Game

    function startGame (e) {
        e.preventDefault();
        console.log(quiz.number);
        setQuizContext({isStarted: true, isFinished: false, number: 0, score: 0, correctAnswer: true,  questions: Questions});
    }

    // Go Back To Home Page

    function goHome (e) {
        e.preventDefault();
        setQuizContext({isStarted: false, isFinished: false, number: 0, score: 0, correctAnswer: true,  questions: Questions});
    }

    // Handle If Question Answered Correctly

    const QuestionCorrect = () => {
        if (quiz.number === (quiz.questions.length - 1)) {
            setQuizContext({isStarted: false, isFinished: true, number: 0, score: quiz.score, correctAnswer: true,  questions: Questions});
        } else {
            setQuizContext({isStarted: true, isFinished: false, number: quiz.number + 1, score: quiz.score + 10, correctAnswer: true, questions: Questions});
        }
    }

    // Handle If Question Answered Incorrectly

    const QuestionIncorrect = () =>  {
        if (quiz.number === (quiz.questions.length - 1)) {
            setQuizContext({isStarted: false, isFinished: true, number: 0, score: quiz.score, correctAnswer: true,  questions: Questions});
        } else {
            wrongAnswer();
            setQuizContext({isStarted: true, isFinished: false, number: quiz.number + 1, score: quiz.score - 10, correctAnswer: true, questions: Questions});
        }
    }

    // Changes Color of Background When Answered Incorrectly
    const wrongAnswer = () =>  {
        setQuizContext({isStarted: true, isFinished: false, number: quiz.number, score: quiz.score, correctAnswer: false,  questions: Questions});
    }


    // Handle the User-Selected Answer

    const handleAnswer = (e) => {
        const selectedButton = e.target.value;
        const buttonCorrectCheck = Object.keys(QuestionObj);
        const correctCheck = Object.values(QuestionObj)[2];
        console.log(correctCheck);
        if (selectedButton === correctCheck) {
            console.log("Your Score Is: " + quiz.score)
            console.log("Your Number Is: " + quiz.number)
            QuestionCorrect();
        } else {
            alert("Sorry, the correct answer is: " + correctCheck);
            QuestionIncorrect();
        };
    }

    return ( 
        <div className="App">
                <Main 
                    welcomeClass={welcomeClass}
                    startClass={startClass}
                    startGame={startGame}
                    resultsBtnClass={resultsBtnClass}
                    question={QuestionObj.question}
                    answerOne={shuffledAnswers[0]}
                    answerTwo={shuffledAnswers[1]}
                    answerThree={shuffledAnswers[2]}
                    answerFour={shuffledAnswers[3]}
                    handleAnswer={handleAnswer}
                    correctAnswer={quiz.correctAnswer}
                    goHome={goHome}
                />  
            <Logo />
            <Title />
            <Timer />
        </div>
     );
}

export default Quiz;