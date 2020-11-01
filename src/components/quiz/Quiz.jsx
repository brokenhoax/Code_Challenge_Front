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

    function startGame (e) {
        e.preventDefault();
        console.log(quiz.number);
        setQuizContext({isStarted: true, number: 0, correctAnswer: true, questions: Questions});
    }

    const QuestionCorrect = (e) => {
        setQuizContext({isStarted: true, number: quiz.number, correctAnswer: true, questions: Questions});
    }

    const QuestionIncorrect = (e) => {
        setQuizContext({isStarted: true, number: quiz.number, correctAnswer: false, questions: Questions});
    }


    const showNextQuestion = (e) => {
        setQuizContext({isStarted: true, number: quiz.number + 1, correctAnswer: true, questions: Questions});
    }
    const handleAnswer = (e) => {
        const selectedButton = e.target.value;
        const buttonCorrectCheck = Object.keys(QuestionObj);
        const correctCheck = Object.values(QuestionObj)[2];
        console.log(correctCheck);
        if (selectedButton === correctCheck) {
            QuestionCorrect();
        } else {
            QuestionIncorrect();
            alert("Sorry, the correct answer is: " + correctCheck);
        };
        showNextQuestion();
    }

    return ( 
        <div className="App">
                <Main 
                    welcomeClass={welcomeClass}
                    startClass={startClass}
                    startGame={startGame}
                    resultsBtnClass={resultsBtnClass}
                    question={QuestionObj.question}
                    answerOne={QuestionObj.correct}
                    answerTwo={QuestionObj.incorrect[0]}
                    answerThree={QuestionObj.incorrect[1]}
                    answerFour={QuestionObj.incorrect[2]}
                    handleAnswer={handleAnswer}
                    correctAnswer={quiz.correctAnswer}
                />  
            <Logo />
            <Title />
            <Timer />
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
    