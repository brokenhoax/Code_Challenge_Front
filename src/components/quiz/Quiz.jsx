import React, { useContext, useEffect, useState } from "react";
import Main from '../main/Main';
import Logo from '../logo/Logo';
import Title from '../title/Title';
import Timer from '../timer/Timer';
import Hello from '../timer/Test';
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

    const firstObject = Object.values(quiz.questions)[quiz.number];
    console.log(firstObject.question);

    function startGame (e) {
        e.preventDefault();
        console.log(quiz.number);
        setQuizContext({isStarted: true, number: 0, questions: Questions});
        setStartClass(!startClass);
        setWelcomeClass(!welcomeClass);
        let currentQuestionIndex = 0
    }

    const showNextQuestion = (e) => {
        setQuizContext({isStarted: true, number: quiz.number + 1, questions: Questions});
    }

    const handleAnswer = (e) => {
        const selectedButton = e.target.value;
        if (selectedButton === "monkey") {
            alert("You got that right!");
        } else {
            alert("You got that wrong!");
        }
    }

    return ( 
        <div className="App">
                <Main 
                    welcomeClass={welcomeClass}
                    startClass={startClass}
                    startGame={startGame}
                    resultsBtnClass={resultsBtnClass}
                    question={firstObject.question}
                    answerOne={firstObject.correct}
                    answerTwo={firstObject.incorrect[0]}
                    answerThree={firstObject.incorrect[1]}
                    answerFour={firstObject.incorrect[2]}
                    showNextQuestion={showNextQuestion}
                    handleAnswer={handleAnswer}
                />  
            <Logo />
            <Title />
            <Timer />
            <Hello />
        </div>
     );
}

export default Quiz;


    // const showQuestion = () => {
    //     console.log(shuffledQuestions);
    //     let question = shuffledQuestions[0].question;
    //     console.log(question);
    //     return (question);

    //     answers.forEach(answer => {
    //         const button = document.createElement('button');
    //         button.innerText = answer.text;
    //         button.classList.add('btn');
    //     })

    //     question.answers.forEach(answer =>  {
    //         const button = document.createElement('button')
    //         button.innerText = answer.text
    //         button.classList.add('btn')
    //         if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //         }
    //         button.addEventListener('click', selectAnswer)
    //         answerButtonsElement.appendChild(button)
    //     })

    //     for (let i=0; i<Questions.length; i++) {
    //         let set = Questions[i].incorrect.concat(Questions[i].correct);
    //         let answers = set[i] + set[i-1];
    //         console.log(answers)
    // }

    // const showAnswerOne = () => {

    //     //Show First Answer
    //     console.log(shuffledQuestions);
    //     let answer = shuffledQuestions[0].correct;
    //     console.log(answer);
    //     return (answer);

    // }

    // const showAnwser = () => {
    //         //Show First Answer
    //         console.log(shuffledQuestions);

    //         let question = shuffledQuestions[0].incorrect.concat(Questions[0].correct)
    //         console.log(question);
    
    //         let shuffledAnswer = answer.sort(() => Math.random() - .5);
    //         console.log(shuffledAnswer);
    //         let answerOne= shuffledAnswer[0];
    //         console.log(answerOne);
    //         return(answerOne);
    // }
    

    // let shuffledQuestions = Questions.sort(() => Math.random() - .5);
    // let shuffledQuestion = [shuffledQuestions[0]];
    // let shuffledAnswers = shuffledQuestions[0].incorrect.concat(shuffledQuestions[0].correct).sort(() => Math.random() - .5);
    