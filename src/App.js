import React from "react";
import Quiz from './components/quiz/Quiz';
import { TimerProvider }  from "./context/TimerContext";
import { QuizProvider }  from "./context/QuizContext";
import "./styles/app.css"

const App = () =>  {

  return (
    <QuizProvider>
      <TimerProvider>
          <Quiz />
      </TimerProvider>
    </QuizProvider>
  );
}

export default App;


