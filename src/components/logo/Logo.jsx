import React, { useContext } from "react";
import { QuizContext } from '../../context/QuizContext';
import '../../styles/app.css';

const Logo = props => {
    
    const [quiz] = useContext(QuizContext);

    return ( 
        <header>
            <div className="logo font-body text-5xl mx-4 flex items-center">
                <div data-cy="point-check" className={!quiz.isStarted ? `` : `animate-pulse`}>{quiz.score}</div>
            </div>
        </header>
     );
}
 
export default Logo;