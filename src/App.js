import Logo from './components/logo/Logo';
import Title from './components/title/Title';
import Timer from './components/timer/Timer';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main className="main"/>  
      <Logo />
      <Title />
      <Timer />

    </div>
  );
}

export default App;
