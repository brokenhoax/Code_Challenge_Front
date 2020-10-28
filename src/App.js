import Logo from './components/logo/Logo';
import Title from './components/title/Title';
import Timer from './components/timer/Timer';
import Main from './components/main/Main';
import { TimerProvider }  from "./context/TimerContext";
import './App.css';

const App = props =>  {
  return (
    <TimerProvider>
      <div className="App">
        <Main className="main"/>  
        <Logo />
        <Title />
        <Timer />
      </div>
    </TimerProvider>
  );
}

export default App;
