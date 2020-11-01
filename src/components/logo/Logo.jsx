import React, { useContext } from "react";
import styles from "./Logo.module.css"
import { QuizContext } from '../../context/QuizContext';

const Logo = props => {
    const [quiz, setQuizContext] = useContext(QuizContext);

    return ( 
        <div className={styles.logo}>
            <div id={styles.spinner}>{quiz.score}</div>
        </div>
     );
}
 
export default Logo;